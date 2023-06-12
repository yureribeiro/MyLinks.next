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
  return  (
      <main className={styles.container}>
        <section className={styles.SectionMainImage}>
            <div className={styles.textMainContent}>
              <p className={styles.textmain}>Links</p>
              <p className={styles.textmain}>Coding</p>
              <p className={styles.textmain}>Tech</p>
            </div>
            <div className={styles.imagecontent}>
             <Image 
            src={myImage}
            alt='foto de Yure sorrindo, com boné branco, camiseta branca'
            className={styles.mainImage}
            />
          </div>
        </section>

          <h1 className={styles.myName}>Yure Ribeiro</h1>

        <section className={styles.SectionRedes}>
          <p className={styles.mySkill}>Desenvolvedor de Software e intusiasta de tecnologia</p>
            <div className={styles.redes}>
               <a href='#' className={styles.linkRedes}>
                <Image 
                  src={youtubeIcon}
                  alt='logotipo do youtube, icone de play com fundo vermelho.' 
                  className={styles.imageRedes}
                  />
               </a>
               <a href='#' className={styles.iconeRedes}>
                <Image 
                  src={instagramIcon}
                  alt='logotipo do Instagram, retangulo branco com circulo por dentro e fundo roza gradiente.' 
                  className={styles.imageRedes}
                  />
               </a>
               <a href='#' className={styles.iconeRedes}>
                <Image 
                  src={linkedinIcon}
                  alt='logotipo do linkedin, letras IN com fundo azul.' 
                  className={styles.imageRedes}
                  />
               </a>
               <a href='#' className={styles.iconeRedes}>
                <Image 
                  src={githubIcon}
                  alt='logotipo do Github, icone de gatinho com fundo preto' 
                  className={styles.imageRedes}
                  />
               </a>
            </div>

            <section className={styles.sectionEmail}>
              <Image src={gmailIcom} className={styles.imageGmail}/>
               <p className={styles.textEmail}>Me mande um Email</p>
            </section>

            <section className={styles.sectionYureWeb}>
                <a href='#' className={styles.linkYureWeb}>
                  Meu Site pessoal e portfólio
               </a>
            </section>

            <section className={styles.sectionSetup}>
              <Link href={'/desksetup'}>Desk Setup produtos e links</Link>
            </section>
        </section>
      </main>
  )
}
