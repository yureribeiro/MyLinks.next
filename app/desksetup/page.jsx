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
                    alt="seta para esquerda"
                    />
                    Voltar
                  </Link>
            </div>
          
          <h1 className={styles.title}>Produtos do meu Setup</h1>
            <nav className={styles.navLinks}>
                <Link
                   href={'https://produto.mercadolivre.com.br/MLB-2798158715-cadeira-brizza-3d-back-system-com-apoio-sintetico-preto-_JM'}
                   className={styles.link}
                   >
                  Cadeira Brizza Executiva
                </Link>
                <Link 
                  href={'https://pt.aliexpress.com/item/1005003835834361.html?aff_fcid=b073a08bb76c4ec58adb1cc994a7b3ae-1667200332936-01969-_DmhIYiT&tt=CPS_NORMAL&aff_fsk=_DmhIYiT&aff_platform=shareComponent-detail&sk=_DmhIYiT&aff_trace_key=b073a08bb76c4ec58adb1cc994a7b3ae-166720'}
                  className={styles.link}
                  >
                    Teclado Epomaker TH80
                </Link>
                <Link 
                  href={'https://pt.aliexpress.com/item/1005004573470343.html?srcSns=sns_More&spreadType=socialShare&bizType=ProductDetail&social_params=20729928065&aff_fcid=f5fc55e46a4b4c26b9a4a44858f22410-1676706331082-03539-_mtLzbdE&tt=MG&aff_fsk=_mtLzbdE&aff_platform=default&sk=_mtLzbdE&aff_trace_key=f5fc55e46a4b4c26b9a4a44858f22410-1676706331082-03539-_mtLzbdE&shareId=20729928065&businessType=ProductDetail&platform=AE&terminal_id=e9229e4dc5204246a11fc00a5b849ef2&afSmartRedirect=y'}
                  className={styles.link}
                  >
                    Led para monitor (rgb)
                </Link>
                <Link 
                  href={'https://www.pichau.com.br/gabinete-gamer-aigo-darkflash-dlm-21-preto-lateral-vidro'}
                  className={styles.link}
                  >
                    Gabinete Dark Flash DLM21
                </Link>
                <Link 
                  href={'https://www.amazon.com.br/gp/product/B07CZM42VF/ref=ppx_yo_dt_b_asin_image_o00_s00?ie=UTF8&psc=1'}
                  className={styles.link}
                  >
                    Suporte Articulado F50N
                </Link>
                <Link 
                  href={'https://shopee.com.br/Mousepad-Gamer-Octopus-80x35-cm-Extra-Grande-i.567190240.19108753661'}
                  className={styles.link}
                  >
                    Mouse Pad Octopus 80x35
                </Link>
                <Link 
                  href={'https://www.pichau.com.br/mouse-logitech-m280-usb-wireless-1000dpi-cinza-910-004285'}
                  className={styles.link}
                  >
                    Mouse Logitech M280 wireless
                </Link>
                <Link 
                  href={'https://www.pichau.com.br/kit-ventoinha-aigo-ar12-3x120mm-argb-ar12-3in1'}
                  className={styles.link}
                  >
                    Kit Fans AIGO (argb) 120MM
                </Link>
            </nav>  
        </div>
    )
}
