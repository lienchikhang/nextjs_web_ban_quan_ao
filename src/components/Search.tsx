import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import styles from '@/styles/header.module.scss';

const Search = () => {
    return (
        <section className={styles.search}>
            <SearchIcon />
            <input className={styles.input} type="text" placeholder='Tìm kiếm sản phẩm...' />
        </section>
    )
}

export default Search