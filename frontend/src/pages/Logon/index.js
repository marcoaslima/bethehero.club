import React, { Component, useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import SweetAlert from 'sweetalert2-react';

// import { Container } from './styles';

import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

import api  from '../../services/api';


export default function Logon()
{
    const [id, setId] = useState('');

    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('None');
    const [text, setText] = useState('None');

    const hystory = useHistory();

    async function handleLogin(e)
    {
        e.preventDefault();

        try{
            const { name } = (await api.post('/sessions', {id})).data;

            localStorage.setItem('ngoId', id);
            localStorage.setItem('ngoName', name);

            hystory.push('/profile');
        }catch(err)
        {
            setTitle(`Erro`);
            setText(`ONG id '${id}' não existe`);
            setShow(true);
        }
    }

    function backHystory()
    {

    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="be the hero" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID" value={id} onChange={e => setId(e.target.value)}/>
                    <button type="submit" className="button">Entrar</button>

                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="heroes" className="hide-on-mobile"/>

            <SweetAlert
                    show={show}
                    title={title}
                    text={text}
                    onConfirm={backHystory}
                />
        </div>
    );

}
