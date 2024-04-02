import React from 'react'
import Nav from './Nav'
import Promotion from './Promotion'
import styles from '@/styles/header.module.scss'
import NavHeader from './NavHeader'

const Header = () => {
    return (
        <header className={styles.header}>
            <Nav />
            <Promotion />
            <NavHeader />
        </header>
    )
}

export default Header