import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default class NewIncident extends Component {
    render() {
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
            <form>
                <input type="text" placeholder="Título do caso" />
                <textarea placeholder="Descrição"></textarea>
                <input  placeholder="Valor em reais" />

                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
      );
    }
}