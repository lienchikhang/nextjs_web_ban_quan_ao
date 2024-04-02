import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import styles from '@/styles/header.module.scss';

const HeaderUser = () => {
    return (
        <PersonIcon className={styles.headerIcon} />
    )
}

export default HeaderUser