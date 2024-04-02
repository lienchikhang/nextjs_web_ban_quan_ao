import React from 'react'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import styles from '@/styles/header.module.scss';
import { Badge } from '@mui/material';

const HeaderBag = () => {
    return (
        <Badge badgeContent={4} color="primary">
            <LocalMallIcon className={styles.headerIcon} />
        </Badge>
    )
}

export default HeaderBag