import React from 'react'
import styles from './Footer.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul>
        <li> <a href='https://www.instagram.com/alxcgc/'> <FaInstagram size={40}/> </a></li>
        <li> <a href='https://www.linkedin.com/in/al%C3%A9xia-costa-4b326825b/'> <FaLinkedin size={40}/> </a></li> 
        <li> <a href='https://github.com/alexiacgcosta'><FaGithub size={40}/> </a> </li>
      </ul>
      <p>alexia.cassia09@gmail.com</p>
      <p> Aléxia Costa © 2023</p>
    </div>
  )
}

export default Footer
