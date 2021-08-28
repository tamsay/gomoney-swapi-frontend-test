import {useState, useEffect} from 'react';
import styles from './HeaderStyles.module.scss';
import cx from 'classnames';
import Navbar from '../Navbar/Navbar';
import Logo from '../../assets/logo.png';
import SearchBar from '../SearchBar/SearchBar';

const Header = (props:any) => {
    const { searchType, displaySearch, displayHeaderHero } = props;
    
    const [headerHero, setHeaderHero] = useState(true);

    useEffect(() => {
        displayHeaderHero === undefined ? setHeaderHero(true) : setHeaderHero(displayHeaderHero);
    }, [displayHeaderHero])
    
    return (
        <div className={cx(styles.container, "flex-col")}>

            <Navbar />

        {headerHero ? 
            <div><div className={cx(styles["page-header"], "flex-row")}>
                <div className={cx(styles["logo-div"], "flex-row")}>
                    <img className={styles.logo} src={Logo} alt="logo" />
                </div>
                <p className={cx(styles["page-header-text"])}>Directory</p>
            </div>

            <p className={cx(styles["header-intro"])}>Find your favorite Characters, Films, Species, Starships and Planets</p></div>
                : "" }

            {displaySearch === true ? <SearchBar type={searchType} /> : ""}
        </div>
    )
}

export default Header;