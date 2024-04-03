'use client'

import React, { Suspense } from 'react'
import styles from '@/styles/header.module.scss';
import { navHeaderConstrants } from '@/constants/header.constants';
import Link from 'next/link';
import useSWR from "swr";
import axios from 'axios';
import { ITypeItem } from '@/interfaces/type.interface';
import { getTypes } from '@/lib/type';
import { Skeleton, Typography } from '@mui/material';
import { notFound } from 'next/navigation';

const fetcher = (url: string) => axios(url).then((res) => res);





const NavList = () => {


    const { data, error, isLoading } = useSWR(
        "http://localhost:8080/api/type/get-all-type",
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    );

    return (
        <ul className={styles.navList}>
            {data ? data.data.content.map((item: ITypeItem, index: number) => {
                return <li key={index} className={`${styles.navItem} w-1/${navHeaderConstrants.length}`}>
                    <Link className={styles.link} href='/'>{item.type_name.toUpperCase()}</Link>
                </li>
            }) : navHeaderConstrants.map((item, index: number) => {
                return <li key={index} className={`${styles.navItem} w-1/${navHeaderConstrants.length}`}>
                    <Typography className={styles.link}>... Loading</Typography>
                </li>
            })}
        </ul>
    )
}

export default NavList