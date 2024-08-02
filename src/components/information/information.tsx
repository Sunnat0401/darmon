import Image from 'next/image'
import styles from './information.module.css'
import { infoGroup, misrImage } from '../../../public'
function Information() {
  return (
    <div className={styles.information}>
    <div className={styles.information_container}>
        <Image className={styles.information_images} src={misrImage} alt='informationrmationImage' />
        <div className={styles.information_wrapper}>
            <div className={styles.information_left}>
                <h3 className={styles.information_title}>
                    Turkiya
                </h3>
                <h4 className={styles.information_subtitle}>
                    Istanbul: Asrlar Kesisgan Abadiy Shahar
                </h4>
                <p className={styles.information_paragraph}>
                    Istanbulga xush kelibsiz – Sharq va G'arb kesisadigan, sehr va tarixiy
                    atmosfera yaratgan shahar.Siz Sultonahmetning jozibali dunyosiga
                    sho'ng'ishingiz, u yerda tor ko'chalar sizni buyuk Ko'k masjid va Aya Sofiyaga
                    olib boradi
                </p>
                <p className={styles.information_text}>
                    Sultonahmet bo'ylab sayohat sizni Vizantiya va Usmoniy
                    imperiyasining uzoq davrlariga olib boradi.  Shahar ramzi bo'lgan Topqapi
                    saroyi, Usmoniy sultonlarining rezidensiyasi, sizni boylik va haremning
                    intrigalariga cho'mdiradi.
                </p>
                <p className={styles.information_subtext}>
                    Mashhur Katta Bozor bo'ylab yuring, bu yerda siz noyob suvenirlar, ziravorlar
                    va antikvar buyumlarni topasiz. Bosfor bo'yidagi ajoyib manzaralardan
                    bahramand bo'ling va Istanbulning ruhini his eting. Turni Dolmabahche
                    saroyi, Usmoniy davrining boylik va nafislik ramzi, bilan yakunlang
                </p>
            </div>
            <Image className={styles.information_group} src={infoGroup} alt='image'/>
        </div>
    </div>
</div>
  )
}

export default Information
