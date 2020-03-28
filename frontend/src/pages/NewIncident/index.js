import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import SweetAlert from 'sweetalert2-react';

import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function NewIncident(){

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const [show, setShow] = useState(false);
    const [titleError, setTitleError] = useState('None');
    const [text, setText] = useState('None');

    const ongId = localStorage.getItem('ngoId')
    const history = useHistory();


    function handleNewIncident(e)
    {
        e.preventDefault();

        const data = {
            title, description, value
        };

        try{
            api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            });

            history.push('/profile');
        }catch(err)
        {
            setTitleError(`Erro`);
            setText(`Erro ao cadastrar incidente`);
            setShow(true);
        }
    }

    return (
        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be the Hero" />
                <h1>Cadastro</h1>
                <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos de sua ONG</p>

                <Link to="/profile" className="back-link">
                    <FiArrowLeft size={16} color="#E02041" />
                    Voltar para a home
                </Link>
            </section>
            <form onSubmit={handleNewIncident}>
                <input type="text" 
                    placeholder="Título do caso" 
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                <textarea 
                    placeholder="Descrição"
                    value={description}
                    onChange={e => setDescription(e.target.value)}                        
                    ></textarea>
                <input  
                    placeholder="Valor em reais" 
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>

        <SweetAlert
                    show={show}
                    title={titleError}
                    text={text}
                    onConfirm={() => setShow(false)}
                />
    </div>
      );
}