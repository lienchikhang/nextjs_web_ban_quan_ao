import React from 'react'
import styles from '@/styles/header.module.scss';
import Link from 'next/link';
import { headerConstants } from '@/constants/header.constants';

const Nav = () => {
    return (
        <section className={styles.topnav}>
            <ul className={styles.nav__left}>
                <li className={styles.link}>
                    <Link href={'/'}>CoolPal</Link>
                </li>
            </ul>
            <ul className={styles.nav__right}>
                {headerConstants.map((item, index) => {
                    return <li key={index} className={styles.link}>
                        <Link href={item.url}>{item.title}</Link>
                    </li>
                })}
            </ul>
        </section>
    )
}

export default Nav