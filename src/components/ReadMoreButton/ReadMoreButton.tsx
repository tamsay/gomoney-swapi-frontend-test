import React from 'react';
import styles from './ReadMoreButtonStyles.module.scss';
import cx from 'classnames';

const ReadMoreButton = (props: Record<string, any>) => {
    const {cardName, category} = props;
    const handleClick = () => {
        localStorage.setItem("cardName", cardName);
        localStorage.setItem("category", category);
    }
    return (
        <button onClick={handleClick} className={cx(styles.container)}>
            <a href="/details-page">Read More</a>
        </button>
    )
}

export default ReadMoreButton;