import { FC } from 'react'
import Image from 'next/image'
import styles from './styles.module.css'
import Link from 'next/link'

interface iElement {
  element: {
    id: string
    name: string
    flickr_images?: string[]
    image?: string
    type: string
    diameter: {
      feet: number
      meters: number
    }
    heat_shield?: {
      material: string
    }
  }
}

export const Card: FC<iElement> = ({ element }) => {
  return (
    <Link href={`/${element?.id}`} key={element?.name}>
      <a className={styles.card}>
        <div className={styles.card__image}>
          {element?.flickr_images || element?.image ? (
            <Image
              placeholder='blur'
              blurDataURL='https://dummyimage.com/10x10/fff/aaa'
              width={'100%'}
              height={'100%'}
              layout='responsive'
              src={element?.flickr_images?.[0] ?? element?.image ?? ''}
              alt={element?.name}
            />
          ) : (
            false
          )}
        </div>
        <h2 className={styles.card__title}>{element?.name}</h2>
        <p className={styles.card__subtitle}>{element?.type}</p>
        <div className={styles.card__description}>
          {element.heat_shield ? (
            <p>
              <strong>Heat shield material:</strong>
              <br />
              {element?.heat_shield?.material}
            </p>
          ) : (
            false
          )}
          <section>
            <strong>Diameters:</strong>
            <br />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <p>{element?.diameter?.feet} feets</p>
              <p>{element?.diameter?.meters} meters</p>
            </div>
          </section>
        </div>
      </a>
    </Link>
  )
}
