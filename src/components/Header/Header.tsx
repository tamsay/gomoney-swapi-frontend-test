import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import styles from './HeaderStyles.module.scss';
import cx from 'classnames';
import Navbar from '../Navbar/Navbar';
import Logo from '../../assets/logo.png';

const Header = () => {
    return (
        <div className={cx(styles.container, "flex-col")}>

            <Navbar />

            <div className={cx(styles["page-header"], "flex-row")}>
                <div className={cx(styles["logo-div"], "flex-row")}>
                    <img className={styles.logo} src={Logo} alt="logo" />
                </div>
                <p className={cx(styles["page-header-text"])}>Directory</p>
            </div>

            <p className={cx(styles["header-intro"])}>Find your favorite Characters, Films, Species, Starships and Planets</p>

            <SearchBar />
        </div>
    )
}

export default Header;