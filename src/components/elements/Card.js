import React, { useState } from 'react'
import styles from './Card.module.css'
import ButtonB from './ButtonB'

const Card = ({img, title, tech, description, repo, site}) => {

  const [info, setInfo] = useState(false)

  function infoOn(){
    setInfo(true)
  }
  function infoOff(){
    setInfo(false)
  }

  return (
    <div className={styles.card} onMouseLeave={infoOff}>
      <a href={site} onMouseEnter={infoOn}>
        <img src={img} alt='imagem do projeto' />
      </a>

     {info === true &&(
        <section>
          <h3> {title} </h3>
          <p> <strong>Tecnologia:</strong> {tech} </p>
          <p> {description} </p>
          <ButtonB text='Acesse o repositório'link={repo}/>
        </section>
      )}

    </div>
  )

}
export default Card
