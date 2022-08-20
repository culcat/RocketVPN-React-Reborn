import React from 'react'
import  logoImage from '../../assets/img/logo.svg'
import { menu } from './menu'

import styles from './Header.module.scss'
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logoImage} alt="" />
      </div>
      <div className={styles.wrapper}>
        <ul className={styles.menu}>
          {menu.map((item, index) => (<li key={'menu item ${index.title'}><a href={item.link}>{item.title}</a></li>
          ) )}
          
        </ul>
      </div>
      <div className={styles.buttons}>
        <button className={styles.login}>Login</button>
        <button className={styles.singup}>Sing UP</button>
      </div>
    </div>
  )
}

export default Header