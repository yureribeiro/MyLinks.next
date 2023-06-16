import Link from "next/link"
import Image from "next/image"
import styles from "./desksetup.module.css"
import ArrowLeft from "../../public/arrow-fat-left.svg"

export default function DeskSetup() {
    return (
        <div className={styles.container}>
            <div className={styles.backContent}>
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
            </div>
          
          <h1 className={styles.title}>meu setup pagina.</h1>
            <nav className={styles.navLinks}>
                <Link 
                  href={'#'}
                  className={styles.link}
                  >
                    Produto 1
                </Link>
                <Link 
                  href={'#'}
                  className={styles.link}
                  >
                    Produto 2
                </Link>
                <Link 
                  href={'#'}
                  className={styles.link}
                  >
                    Produto 3
                </Link>
                <Link 
                  href={'#'}
                  className={styles.link}
                  >
                    Produto 4
                </Link>
                <Link 
                  href={'#'}
                  className={styles.link}
                  >
                    Produto 5
                </Link>
                <Link 
                  href={'#'}
                  className={styles.link}
                  >
                    Produto 6
                </Link>
            </nav>  
        </div>
    )
}