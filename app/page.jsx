import Link from 'next/link'
import Image from 'next/image'
import styles from './home.module.css'

import myImage from '../public/eu.png'
import githubIcon from '../public/github.png'
import youtubeIcon from '../public/youtube.png'
import linkedinIcon from '../public/linkedin.png'
import instagramIcon from '../public/instagram.png'
import gmailIcom from '../public/gmail.png'

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.sectionBanner}>
        <div className={styles.banner}>
          <Image
            src={myImage}
            alt='foto de Yure sorrindo, com boné branco, camiseta branca'
            className={styles.imageBanner}
          />
          <div className={styles.contentTextBanner}>
            <p className={styles.textBanner}>Links</p>
            <p className={styles.textBanner}>Code</p>
            <p className={styles.textBanner}>Tech</p>
          </div>
        </div>
        <h1 className={styles.descriptionName}>Yure Ribeiro</h1>
        <p className={styles.descriptionSlog}>Desenvolvedor e intusiasta de tecnologia</p>
      </section>

      <section className={styles.SectionRedes}>
        <div className={styles.redes}>
          <Link 
            href='https://www.youtube.com/channel/UC0JDDjvBJv4vAk9plW8Wpug'
            className={styles.linkRedes}
            target='blank'
           >
            <Image
              src={youtubeIcon}
              alt='logotipo do youtube, icone de play com fundo vermelho.'
              className={styles.imageRedes}
            />
          </Link>
          <Link 
            href='https://www.instagram.com/yure.ribeiroo' 
            className={styles.iconeRedes}
            target='blank'
            >
            <Image
              src={instagramIcon}
              alt='logotipo do Instagram, retangulo branco com circulo por dentro e fundo roza gradiente.'
              className={styles.imageRedes}
            />
            
          </Link>
          <Link 
            href='https://www.linkedin.com/in/yureribeirodev/' 
            className={styles.iconeRedes}
            target='blank'
            >
            <Image
              src={linkedinIcon}
              alt='logotipo do linkedin, letras IN com fundo azul.'
              className={styles.imageRedes}
            />
          </Link>
          <Link
             href='https://github.com/yureribeiro' 
             className={styles.iconeRedes}
             target='blank'
             >
            <Image
              src={githubIcon}
              alt='logotipo do Github, icone de gatinho com fundo preto'
              className={styles.imageRedes}
            />
          </Link>
        </div>

        <section className={styles.sectionEmail}>
          <Link 
            className={styles.linkEmail}
            href={'/form'}
            >
             <Image src={gmailIcom} className={styles.imageGmail} />
          <div>
            <p className={styles.textEmailContent}>Me mande um Email</p>
            <small className={styles.textEmail}>yureribeirocontato@gmail.com</small>
          </div>
          </Link>
        </section>

        <section className={styles.sectionYureWeb}>
          <Link 
            href='https://yureweb.vercel.app' 
            className={styles.linkYureWeb}
            target='blank'
            >
              <p className={styles.textLink}>Yure Web, Site Pessoal</p>
          </Link>
        </section>

        <section className={styles.sectionSetup}>
          <Link 
            href={'/desksetup'} 
            className={styles.linkYureWeb}
            >
             <p className={styles.textLink}>Desk Setup, Periféricos e Links</p> 
             </Link>
        </section>
      </section>
    </main>
  )
}
