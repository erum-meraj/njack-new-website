import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>NJACK</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.parentDiv}>
        <div className={styles.heroSection}>
          <img loading='lazy' src="/home/NJACK logo.svg" alt="NJACK Logo" />
          <div className={styles.heroText}>NJACK</div>
          <div className={styles.subHeroText}>Not just another Computer Science Klub</div>
        </div>
        <div className={styles.aboutSection}>
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, dolores. Sequi commodi nobis laudantium, quod quisquam tempore dolor veritatis consectetur ratione aut labore possimus at, minus eum magni architecto adipisci. Odit similique dicta deleniti, quisquam qui cupiditate dolores. Enim adipisci vel nihil aspernatur pariatur neque doloremque deleniti, quidem temporibus, voluptatum, ducimus beatae id. Voluptatibus, ab asperiores minus quod voluptate rem.</p>
        </div>
        <div className={styles.section}>
          <h2>Upcomming Events</h2>
          <div className={styles.cardSection}>
            {/* TODO: Add the event cards as a components */}
          </div>
        </div>
        <div className={styles.section}>
          <h2>Departments</h2>
          <div className={styles.cardSection}>
            {/* TODO: Add the department cards as a components */}
          </div>
        </div>
        <div className={styles.section}>
          <h2>Team</h2>
          <h3>Coordinators</h3>
          <div className={styles.cardSection}>
            {/* TODO: Add the coordinator cards as a components */}
          </div>
          <h3>Sub-Coordinators</h3>
          <div className={styles.cardSection}>
            {/* TODO: Add the team cards as a components */}
          </div>
        </div>
      </div>
    </>
  )
}