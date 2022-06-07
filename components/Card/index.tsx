import { FC } from 'react'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export const Card: FC<{ element: {} }> = ({ element }) => {
  return (
    <a
      key={element?.name}
      href='https://nextjs.org/docs'
      className={styles.card}
    >
      <div className={styles.card__image}>
        <Image
          width={'100%'}
          height={'100%'}
          layout='responsive'
          src={element?.flickr_images[0]}
          alt={element?.name}
        />
      </div>
      <h2 className={styles.card__title}>{element?.name}</h2>
      <p className={styles.card__subtitle}>{element?.type}</p>
      <div className={styles.card__description}>
        {element?.heat_shield ? (
          <p>
            <strong>Heat shield material:</strong>
            <br />
            {element?.heat_shield?.material}
          </p>
        ) : (
          false
        )}
        <p>
          <strong>Diameters:</strong>
          <br />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <p>{element?.diameter.feet} feets</p>
            <p>{element?.diameter.meters} meters</p>
          </div>
        </p>
      </div>
    </a>
  )
}
