import React from 'react'
import styles from './Card.module.css'
import ButtonB from './ButtonB'

const card = ({img, title, tech, description, repo, site}) => {
  return (
    <div className={styles.card}>
      <a href={site}>
        <img src={img} alt='imagem do projeto'/>
      </a>
        <section>
          <h3> {title} </h3>
          <p> <strong>Tecnologia:</strong> {tech} </p>
          <p> {description} </p>
          <ButtonB text='Acesse o repositório'link={repo}/>
        </section>
      
    </div>
  )
}

export default card
