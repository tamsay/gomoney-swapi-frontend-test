import React from 'react';
import styles from './SearchBarStyles.module.scss';
import cx from 'classnames';
import { Icon } from '@iconify/react';

const SearchBar = () => {
    return (
        <div className={cx(styles.container, "flex-row")}>
            <div className={cx(styles["search-input-wrapper"], "flex-row")}>
                <Icon icon="bx:bx-search" color="#000" className={cx(styles.icon)}/>
                <input className={styles.searchInput} type="text" name="search" id="search" placeholder="Search"/>
            </div>
        </div>
    )
}

export default SearchBar;