import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';
import SweetAlert from 'sweetalert2-react';

import api from '../../services/api';

export default function Profile()
{
    const ongId = localStorage.getItem('ngoId');
    const ongName = localStorage.getItem('ngoName');

    const [incidents, setIncidents] = useState([])

    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('None');
    const [text, setText] = useState('None');

    const hystory = useHistory();

    useEffect(() => {

      api.get('/profile', {
        headers: {
          Authorization: ongId
        }
      }).then(response => {
        setIncidents(response.data);
      });
    }, [ ongId ]);
   
    async function handleDeleteIncident(id)
    {
      try{
        await api.delete(`incidents/${id}`, {
          headers: {
            Authorization: ongId
          }
        });

        setIncidents(incidents.filter(incident => incident.id !== id));

      }catch(err)
      {
        setTitle(`Erro`);
        setText(`Erro ao deletar incidente id '${id}'`);
        setShow(true);
      }
    }

    function handleLogout()
    {
      localStorage.clear();
      hystory.push('/');
    }

      return (
          <div className="profile-container">
              <header>
                    <img src={logoImg} alt="Be the Hero"/>
                    <span>Bem vinda, {ongName}</span>

                    <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                    <button type="button" onClick={() => handleLogout() }>
                        <FiPower  size={18} color="#E02041"/>
                    </button>
              </header>
              <h1>Casos cadastrados</h1>
              <ul>
                { incidents.map(incident => (
                  <li key={incident.id}>
                      <strong>CASO:</strong>
                      <p>{incident.title}</p>
                      <strong>DESCRIÇÃO:</strong>
                      <p>{incident.description}</p>
                      <strong>VALOR:</strong>
                      <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

                      <button type="button" onClick={() => handleDeleteIncident(incident.id) }>
                        <FiTrash2 size={20} color="#a8a8b3"/>
                      </button> 
                  </li>
                ))
                }
              </ul>

              <SweetAlert
                    show={show}
                    title={title}
                    text={text}
                    onConfirm={() => setShow(false)}
                />
          </div>
      );
}