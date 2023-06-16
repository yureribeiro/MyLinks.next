'use client'

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import emailjs from '@emailjs/browser'
import styles from './form.module.css'
import wpplogo from '../../public/whatsapp-logo.svg'
import ConfirmEmail from "../components"
import ArrowLeft from "../../public/arrow-fat-left.svg"

function Contact () {
  const [confirm, setConfirm] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e) {
    e.preventDefault()

    if(name === '' || email === '' || message === '') {
      alert("Preencha todos os campos")
      return
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send('service_jcc4gei', 'template_wpmnpdn', templateParams, 'mmRto9EDWK03A5uk-')
    .then((response) => {
      console.log("EMAIL ENVIADO", response.status, response.text)
      setName('')
      setEmail('')
      setMessage('')
      setConfirm(true)
    }, (err) => {
      console.log("ERRO: ", err)
    })
  }


  return (
    <section className={styles.container}>
      <Link 
        href={'/'} 
        className={styles.back}
        > 
        <Image 
          src={ArrowLeft}
          className={styles.imageArrowLeft}
          alt="seta de voltar"
          />
        Voltar
      </Link>

       <h1 className={styles.title}>Entre em contato comigo por Email ou WhatsApp!</h1>

    <form onSubmit={sendEmail} className={styles.form}>
      <label className={styles.label}>Nome</label>
        <input 
          className={styles.input}
          type="text" 
          placeholder="Digite seu Nome"
          name="name" 
          onChange={(e) => setName(e.target.value)}
          value={name} 
          />
        <label className={styles.label}>Email</label>
          <input 
            className={styles.input}
            type="text" 
            placeholder="Digite seu Email"
            name="email" 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />
        <label className={styles.label}>Mensagem</label>
          <textarea 
            className={styles.textArea}
            type="text" 
            placeholder="Digite sua mensagem"
            name="message" 
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            />

            <div className={styles.buttonsDiv}>
                <Link 
                  href="https://wa.me/message/IVLV4RSMIJ7WO1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.buttonWpp}
                  > 
                    <Image
                      className={styles.imageWpp} 
                      src={wpplogo} 
                      alt="whatsapp"
                      />
                  </Link> 
              <input 
                className={styles.button}
                type='submit' 
                value='Enviar'
                />

                  {confirm ? (             
                    <div className={styles.confirmContainer}>
                      <ConfirmEmail />
                    </div>
                    ) : (
                    <p className={styles.none}>.</p>
                  )}
            </div>
        </form>
    </section>
  )
}

export default Contact