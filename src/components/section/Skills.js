import React from 'react'
import styles from './Skills.module.css';
import javascript from '../../image/skill/javascript.svg'
import html from '../../image/skill/html.svg'
import typescript from '../../image/skill/typescript.svg'
import css from '../../image/skill/css.svg'
import react from '../../image/skill/react.svg'

const Skills = () => {
  return (
    <div id='skills' className={styles.skill}>
      <h1>Habilidades</h1>
      <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
      <div>
        <img src={javascript}/>
        <img src={html}/>
        <img src={css}/>
        <img src={react}/>
        <img src={typescript}/>
      </div>
    </div>
  )
}

export default Skills
