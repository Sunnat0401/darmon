import Image from 'next/image'
import styles from './description.module.css'
import { Group1, Group2, Group3 } from '../../../public'
const Description = () => {
  return (
    <div className={styles.description}>
      <div className={styles.description_container}>
        <div className={styles.description_left}>
          <Image className={styles.description_image} src={Group1} alt='image' />
          <Image className={styles.description_image} src={Group2} alt='image' />
          <Image className={styles.description_image} src={Group3} alt='image' />
        </div>
        <div className={styles.description_right}>
          <h2 className={styles.description_title}>
            Antaliya: Yerdagi Jannat
          </h2>
          <p className={styles.description_text}>
            Tavr tog'lari bilan o'ralgan, yam-yashil go'zal Antaliya shahri – Turkiya
            Rivyerasining eng chiroyli shahri! Siz eski shahar Kaleichini ko'rasiz, bu
            yerda yam-yashil tepaliklarda qizil tomli kichik g'ishtli uylar tarqalgan.
            Shaharning ramzlari bo'lgan Riflenaya minora yoki "gofra" minora,
            shahar mudofaa devorlarining bir qismi bo'lgan soat minorasi. Shahar
            tarix va madaniyatga boy, shuningdek, zargarlik buyumlari, charm
            buyumlar va qo'l to'qilgan gilamlar katta savdo qiymatiga ega. Bundan
            tashqari, biz Antaliya sohilining durdonasi – Karpuzkaldiran sharsharasini
            ziyorat qilamiz, u 39 metr balandlikdan dengizga tushadi.
          </p>
        </div>
      </div>

    </div>
  )
}

export default Description
