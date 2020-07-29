import React from 'react';
import '../assets/sass/grayscale.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';

library.add(fab, faCheckSquare, faWhatsapp, faCoffee)

export default function Whats() {
  return (
    // <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <a href="https://api.whatsapp.com/send?phone=5573017740&text=Que%20Pedal%20Me%20llamo%20Derek." class="float" target="_blank">
      
      <FontAwesomeIcon icon={['fab', 'whatsapp']} />
          </a>
    );
  }
export const Showcase = () => (
  <div>
    <FontAwesomeIcon icon={['fab', 'apple']} />
    <FontAwesomeIcon icon={['fab', 'microsoft']} />
    <FontAwesomeIcon icon={['fab', 'google']} />

    <FontAwesomeIcon icon="check-square" />
    With Coffee Checked, these companies always know their coffee is hot and ready!
  </div>
)