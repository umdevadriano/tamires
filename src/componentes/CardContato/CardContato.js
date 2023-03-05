import React from 'react';
import Styles from './CardContato.module.css';
import imagem from '../WhatsAppContato/whatsapp.png';
import imagemTelefone from '../Contato/telefone.png';
import RedeSociais from '../RedeSociais/RedeSociais';

const CardContato = () => {
  const tel = ['(11)9393-79761'];
  const whats = ['(11)9393-79761'];

  return (
    <div className={Styles.Container}>
      <div>
        <h1>
          <a href="https://goo.gl/maps/JFZ4VAMbNntuRDdo8" target="blank">
            <lord-icon
              src="https://cdn.lordicon.com/elzslyvl.json"
              trigger="hover"
              style={{ width: '100px', height: '100px' }}
            ></lord-icon>
          </a>

          <br />
          <small>Rua Inajá 72 , parque pirajussara Embu das artes - Sp</small>
          <br />
          <br />
          <small>
            Funcionamento: Terça a Domingo das 10:00h as 19:00h (Somente com
            Agendamento Prévio)
          </small>
        </h1>
      </div>

      <ul>
        {tel.map((telefone) => (
          <li>
            <img src={imagemTelefone} alt="Telefone" />
            {telefone}
          </li>
        ))}
        {whats.map((whatsapp) => (
          <li>
            <a
              href="https://wa.me/5511984835370?text=Ol%C3%A1%21+Estou+no+site+e+gostaria+de+agendar+um+horário"
              target="blank"
            >
              <img src={imagem} alt="Logo whatsapp" />
              {whatsapp}
            </a>
          </li>
        ))}
      </ul>
      <RedeSociais posicao="right" />
    </div>
  );
};

export default CardContato;
