import Image from 'next/image'
import React from 'react'
import styles from '@/styles/header.module.scss';
import { navHeaderConstrants } from '@/constants/header.constants';
import Link from 'next/link';
import NavList from './NavList';
import Search from './Search';
import HeaderUser from './HeaderUser';
import HeaderBag from './HeaderBag';
import HeaderSearch from './HeaderSearch';
import HeaderMenu from './HeaderMenu';

const NavHeader = () => {
    return (
        <section className={styles.NavHeader}>
            <div className='flex'>
                <HeaderMenu />
                <HeaderSearch />
            </div>
            <Image
                src="/assets/images/logo_coolmate.svg"
                alt='Coolpal Logo'
                width={100}
                height={100}
                className={styles.image}
            />
            <NavList />
            <Search />
            <div className='flex'>
                <HeaderUser />
                <HeaderBag />
            </div>
        </section>
    )
}

export default NavHeader