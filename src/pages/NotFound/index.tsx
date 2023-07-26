/* import darthVader404 from '@/assets/NotFound/darthVader404.gif' */
import styles from './NotFound.module.css'
import { Link } from 'react-router-dom'

export default function NotFound () {
  return (
    <Link to='/'>
      <div className={styles.notFound}>
        <p className={styles.text}>You have delved too far into the dark side of the Force</p>
        {/* <img src={darthVader404} alt="Page Not Found" className={styles.img} /> */}
        <p className={styles.text}>Click to return</p>
      </div>
    </Link>
  )
}
