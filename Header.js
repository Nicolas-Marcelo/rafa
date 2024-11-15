// Header.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css'; // Arquivo CSS para estilização

const Header = ({ onMenuClick }) => {
  const location = useLocation();

  // Mapeamento de rotas para títulos
  const routeTitles = {
    '/home': 'Todos Desafios',
    '/googleauth': 'Sua Conta',
    '/adicionar': 'Adicionar Desafio',
    '/exibirdesafio': 'Meus Desafios',
  };

  // Título atual baseado na rota
  const currentTitle = routeTitles[location.pathname] || 'CorrectTask';

  return (
    <header className="header">
      <h1 className='header-title'>CorrectTask</h1>
      <h1 className="header-title">{currentTitle}</h1>
      <button className="menu-button" onClick={onMenuClick}>
        ☰
      </button>
    </header>
  );
};

export default Header;
