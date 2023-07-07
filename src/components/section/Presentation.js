import React from 'react'
import styles from './Presetation.module.css';
import ButtonA from '../elements/ButtonA';
import { useEffect, useState } from 'react';

const Presentation = () => {

  const [text, setText] = useState('')
  //define as palavras que vão sofrer o efeito
  const toRotate = ['Aléxia Costa!', 'Desenvolvedora Web!']
  const [loop, setLoop] = useState(0)
  // verifica se está na hora de digitar ou de apagar
  const [isDeleting, setIsDeleting] = useState(false)
  const period = 100
  //varia o tempo do efeito
  const [delta, setDelta] = useState(100)


  useEffect(() => {
  let ticker = setInterval(() => {
    toType()
  }, delta)
  return()=> {clearInterval(ticker)}
  }, [text])

  const toType = () => {
    let i = loop % toRotate.length;
    let fullText = toRotate[i]
    let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1)
    setText(updatedText);

    if(!isDeleting && updatedText===fullText){
      setIsDeleting(true)
      setDelta(period)
    }else if (isDeleting && updatedText===''){
      setIsDeleting(false)
      setDelta(period)
      setLoop(loop+1)
    }
  }

  return (
    <div id='presetation' className={styles.presentation}>
      <p><strong>Bem vindo ao meu Portifólio</strong></p>
      <h1>Olá, eu sou {text}</h1>
      <p>
        Formada no Curso de Graduação e Formação de Sargentos do Exército Brasileiro, onde fiz o Tecnológo de Manutenção de equipamentos de TIC. Atualmente sou aluna da Escola DNC na formação de tecnologia para me especializar em programação.
      </p>
      <ButtonA text='Conecte-se comigo!' link='https://www.linkedin.com/in/al%C3%A9xia-costa-4b326825b/'/>
    
    </div>
  )
}

export default Presentation
