import React from 'react'
import styles from '@/styles/header.module.scss';
import { navHeaderConstrants } from '@/constants/header.constants';
import Link from 'next/link';

const NavList = () => {
    return (
        <ul className={styles.navList}>
            {navHeaderConstrants.map((item, index) => {
                return <li key={index} className={`${styles.navItem} w-1/${navHeaderConstrants.length}`}>
                    <Link className={styles.link} href={item.url}>{item.title.toUpperCase()}</Link>
                </li>
            })}
        </ul>
    )
}

export default NavList