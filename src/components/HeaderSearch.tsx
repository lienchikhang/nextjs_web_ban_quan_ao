'use client'

import React, { useContext } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import styles from '@/styles/header.module.scss';
import Context from '@/lib/store/Context';

const HeaderSearch = () => {

    return (
        <SearchIcon className={styles.headerIconSearch} />
    )
}

export default HeaderSearch
