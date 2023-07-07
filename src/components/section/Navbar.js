import React from 'react'
import styles from './Navbar.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul>
        <li> <Nav.Link href='#presetation'> Apresentação </Nav.Link> </li>
        <li> <Nav.Link href='#skills'>Habilidades</Nav.Link> </li>
        <li> <Nav.Link href='#projects'>Projetos</Nav.Link> </li>
      </ul>
      <ul>
        <li> <a href='https://www.instagram.com/alxcgc/'> <FaInstagram size={30}/> </a></li>
        <li> <a href='https://www.linkedin.com/in/al%C3%A9xia-costa-4b326825b/'> <FaLinkedin size={30}/> </a></li> 
        <li> <a href='https://github.com/alexiacgcosta'><FaGithub size={30}/> </a> </li>
      </ul>
    </div>
  )
}

export default Navbar