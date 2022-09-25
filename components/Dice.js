import React from 'react'
import styles from '../styles/Dice.module.css'

export default function Dice({number}) {
  return (
    <div>
        <div className={styles.containerImg}>
            <img className={styles.imgStyle} src={`${number}.png`} alt={`${number}.png`} />
        </div>
    </div>
  )
}


