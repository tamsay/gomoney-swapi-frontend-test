import React from 'react';
import styles from './NavbarStyles.module.scss';
import Logo from '../../assets/logo.png';


const Navbar = () => {
    return (
        <div className={styles.container}>
        <div className={styles["logo-div"]}>
                <img className={styles.logo} src={Logo} alt="logo" />
        </div>

    </div>
    )
}

export default Navbar;