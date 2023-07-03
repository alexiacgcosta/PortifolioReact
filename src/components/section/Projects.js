import React from 'react'
import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Card'
import ccxp from '../../image/projects/ccxp.png'
import dnccoffe from '../../image/projects/dnccoffe.png'

const Projects = () => {
  return (
    <div id='projects' className={styles.project}>
      <h1> Projetos </h1>
      <Card
      img={ccxp}
      title='LandingPage CCXP'
      tech='HTML, CSS e JS'
      description='Desenvolvimento de uma landing page para compra de ingressos da CCXP.'
      repo='https://github.com/alexiacgcosta/landingPageCCXP'
      site=''
      />
      <Card
      img={dnccoffe}
      title='LandingPage DNC Coffe'
      tech='HTML, CSS e Bootstrap'
      description='Desenvolvimento de uma landing page para um café.'
      repo='https://github.com/alexiacgcosta/DNCcoffes'
      site=''
      />
      <ButtonB text='Acesse meu repositório' link='https://github.com/alexiacgcosta?tab=repositories'/>
    </div>
  )
}

export default Projects