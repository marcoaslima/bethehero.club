import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import SweetAlert from 'sweetalert2-react';


import './styles.css';
import logoImg from '../../assets/logo.svg';

import api  from '../../services/api';

export default function Register()
{

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatApp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUF] = useState('');

    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('None');
    const [text, setText] = useState('None');

    const hystory = useHistory();

    async function handleRegister(e)
    {
        e.preventDefault();

        const data ={
            name, email, whatsapp, city, uf
        };

        try{
            const { id } = await (await api.post('/ngos', data)).data;
            setTitle(`Sucess`);
            setText(`Seu id de acesso ${id}`);
        }catch(err)
        {
            setTitle(`Erro`);
            setText(`Erro no cadastro, tente novamente`);
        }

        setShow(true);
    }

    function backHystory()
    {
        setShow(false);
        hystory.push('/');
    }

    return (
        <div className="register-container">
            <div className="content">
                <section className="hide-on-mobile">
                    <img src={logoImg} alt="Be the Hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos de sua ONG</p>

                    <Link to="/" className="back-link">
                        <FiArrowLeft size={16} color="#E02041" />
                        Já tenho cadastro
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input type="text" placeholder="Nome da ONG" value={name} onChange={e => setName(e.target.value)}/>
                    <input type="email" placeholder="Email"  value={email} onChange={e => setEmail(e.target.value)}/>
                    <input type="tel" placeholder="WhatsApp"  value={whatsapp} onChange={e => setWhatApp(e.target.value)}/>
                    <div className="input-group">
                        <input type="text" placeholder="Cidade" value={city}  onChange={e => setCity(e.target.value)} />
                        <input type="text" placeholder="UF" style={{ width: 80 }}  value={uf} onChange={e => setUF(e.target.value)} />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>

                <SweetAlert
                    show={show}
                    title={title}
                    text={text}
                    onConfirm={backHystory}
                />
            </div>
        </div>
    );
}