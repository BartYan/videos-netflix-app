import React, {useState} from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import styles from './navbar.module.css';



const NavBar = (props) => {
    const {username} = props;

    const [showDropdown, setShowDropdown] = useState(false);

    const router = useRouter();

    const handleShowDropdown = (e) => {
        setShowDropdown(!showDropdown);
    }
    const handleOnClickHome = (e) => {
        e.preventDefault();
        router.push('/');
    }
    const handleOnClickMyList = (e) => {
        e.preventDefault();
        router.push('/browse/my-list');
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <a className={styles.logoLink} href=''>
                        <div className={styles.logoWrapper}>
                            <Image
                                // loader={myLoader}
                                src="/static/Netflix.svg"
                                alt="logo"
                                width="128px"
                                height="34px"
                            />
                        </div>
                    </a>
                    <ul className={styles.navItems}>
                        <li className={styles.navItem} onClick={handleOnClickHome}>
                            Home
                        </li>
                        <li className={styles.navItem2} onClick={handleOnClickMyList}>
                            My List
                        </li>
                    </ul>
                    
                    <nav className={styles.navContainer}>
                        <div>
                            <button className={styles.usernameBtn} onClick={handleShowDropdown}>
                                <p className={styles.username}>{username}</p>
                                <Image
                                    // loader={myLoader}
                                    src="/static/expand_more.svg"
                                    alt="expand dropdown"
                                    width='24px'
                                    height='24px'
                                />
                            </button>
                            {showDropdown && (
                            <div className={styles.navDropdown}>
                                <div>
                                    <Link href="/login">
                                        <a className={styles.linkName}>Sign Out</a>
                                    </Link>
                                    
                                    <div className={styles.lineWrapper}></div>
                                </div>
                            </div>
                            )}
                        </div>
                    </nav>
                    
                </div>
            </div>
        </>
    )
}

export default NavBar;