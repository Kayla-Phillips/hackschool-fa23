import Image from 'next/image';
import styles from '../styles/Home.module.css'
import acmLogo from '../assets/acmlogo.png'


export default function Home() {
  return (
    /* Each function in JSX can only return ONE DOM element, so we have one top-level div */
    <div className={styles.main}>
        <div className={styles.welcome}>
          <h2> Welcome to HackRacer! </h2>
          <p>You can navigate to <i>Add Sectence</i> button at the top to add a new sentence. Then you can go over to <i>Play Game</i> to start playing the game.</p>
            {/* Replace the heading, and add a short paragraph about your website here! */}
        </div>
      <div className={styles.image}>
        {/* Put the ACM logo here! */}
        {/* Keep in mind that any images you want to use must be imported from the /assets folder */}
        <Image src={acmLogo} width = {200} height = {200} alt = "ACM Logo"/>
      </div>
    </div>
  )
}
