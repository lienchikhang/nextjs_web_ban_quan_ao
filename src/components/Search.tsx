import React, { useContext } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import styles from '@/styles/header.module.scss';
import Context from '@/lib/store/Context';

const Search = () => {

    const [state, dispatch] = useContext(Context);

    console.log('state', state);

    const handleSearch = () => {
        dispatch({
            type: 'toggleModal',
            payload: true
        })
    }

    return (
        <section className={styles.search}>
            <SearchIcon />
            <input onClick={handleSearch} className={styles.input} type="text" placeholder='Tìm kiếm sản phẩm...' />
        </section>
    )
}

export default Search