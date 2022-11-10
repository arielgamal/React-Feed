import styles from './Header.module.css'

import webLogo from '../assets/logo.png'

export function Header() {
  return (
    <header className={styles.header}>
    <img src={webLogo} alt='logotipo' />
    </header>
  );
}