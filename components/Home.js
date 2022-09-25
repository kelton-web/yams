import styles from '../styles/Home.module.css';
import stylesDice from '../styles/Dice.module.css';
import Dice from './Dice';

function Home() {

  return (
    <div className={styles.container}>
      <div>
        <ArrowAll direction="Left"/>
      </div>
      <main className={styles.main}>
          <img src="logo.png" alt='logo' className={styles.logoStyle} />
        <div className={styles.containerAllde}>
          <div className={styles.containerImg}>
          <Dice number={3}/>
          <Dice number={1}/>
          <Dice number={3}/>
          <Dice number={3}/>
          <Dice number={3}/>
          </div>
        </div>
      </main>
      <ArrowAll direction="Right"/>
    </div>
  );
}


export function ArrowAll({direction}) {
  return (
    direction == "Right" ?
    <div className={stylesDice[`arrow${direction}`]}></div>
     : <div className={stylesDice[`arrow${direction}`]}>
</div>
  )
}

/* export function ArrowAll({direction}) {
  return Array(3).fill('').map(() => )
} */

export default Home;
