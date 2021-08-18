import React from 'react';
import cx from 'classnames';
import styles from "./CharacterCardStyles.module.scss";
import ReadMoreButton from "../ReadMoreButton/ReadMoreButton";

const CharacterCard = (props: Record<string, any>) => {
    const { name, birthYear, gender } = props;
    return (
        <div className={cx(styles.container)}>
            <div className={cx(styles.cardTop)}>
                <img src="logo192.png" alt="card-img" />
            </div>
            <div className={cx(styles.cardBottom)}>
                <h5>{name}</h5>
                <p>{birthYear}</p>
                <p>{gender}</p>
                <ReadMoreButton cardName={name} category='charactersCategory'/>
            </div>
        </div>
    )
}

export default CharacterCard;