import React from 'react'
import styles from './Presetation.module.css';
import ButtonA from '../elements/ButtonA';


const Presentation = () => {
  return (
    <div id='presetation' className={styles.presentation}>
      <p><strong>Bem vindo ao meu Portifólio</strong></p>
      <h1>Olá, eu sou Aléxia Costa!</h1>
      <p>
        Formada no Curso de Graduação e Formação de Sargentos do Exército Brasileiro, onde fiz o Tecnológo de Manutenção de equipamentos de TIC. Atualmente sou aluna da Escola DNC na formação de tecnologia para me especializar em programação.
      </p>
      <ButtonA text='Conecte-se comigo!' link='https://www.linkedin.com/in/al%C3%A9xia-costa-4b326825b/'/>
    
    </div>
  )
}

export default Presentation
