import React from 'react'
import styles  from './Header.module.css'
import { Link } from 'react-router-dom'
import {ReactComponent as Evr} from '../Assets/logo.svg'

const Header = () => {
  return (
    <header className='header'>
        <nav className={`${styles.nav} container`}>
            <Link to={'/'} className={styles.logo} area-label="EVR - Home">
                <Evr />
            </Link>
            <Link to={'/simulador'} className={styles.simulador} >Simular Score</Link>
            <Link to={'/procuracao'} className={styles.procuracao} >Procuração</Link>
            <Link to={'/controle'} className={styles.procuracao} >Controle</Link>
        </nav>
    </header>
  )
}

export default Header
