import React from 'react';
import styles from './NavbarStyles.module.scss';
import Logo from '../../assets/logo.png';


const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles["logo-div"]}>
                <a href="/">
                <img className={styles.logo} src={Logo} alt="logo" />
                </a>
                
        </div>

    </div>
    )
}

export default Navbar;