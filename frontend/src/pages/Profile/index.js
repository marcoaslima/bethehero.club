import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default class Profile extends Component {
    render() {
      return (
          <div className="profile-container">
              <header>
                    <img src={logoImg} alt="Be the Hero"/>
                    <span>Bem vinda, APAD</span>

                    <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                    <button type="button">
                        <FiPower  size={18} color="#E02041"/>
                    </button>
              </header>
              <h1>Casos cadastrados</h1>
              <ul>
                  <li>
                      <strong>CASO:</strong>
                      <p>Caso de teste</p>
                      <strong>DESCRIÇÃO:</strong>
                      <p>Descrição de teste</p>
                      <strong>VALOR:</strong>
                      <p>Valor de teste</p>

                      <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                      </button> 
                  </li>
                  <li>
                      <strong>CASO:</strong>
                      <p>Caso de teste</p>
                      <strong>DESCRIÇÃO:</strong>
                      <p>Descrição de teste</p>
                      <strong>VALOR:</strong>
                      <p>Valor de teste</p>

                      <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                      </button> 
                  </li>
                  <li>
                      <strong>CASO:</strong>
                      <p>Caso de teste</p>
                      <strong>DESCRIÇÃO:</strong>
                      <p>Descrição de teste</p>
                      <strong>VALOR:</strong>
                      <p>Valor de teste</p>

                      <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                      </button> 
                  </li>
                  <li>
                      <strong>CASO:</strong>
                      <p>Caso de teste</p>
                      <strong>DESCRIÇÃO:</strong>
                      <p>Descrição de teste</p>
                      <strong>VALOR:</strong>
                      <p>Valor de teste</p>

                      <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                      </button> 
                  </li>
              </ul>
          </div>
      );
    }
}