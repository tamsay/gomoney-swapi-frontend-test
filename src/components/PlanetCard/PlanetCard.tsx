import React from 'react';
import cx from 'classnames';
import styles from "./PlanetCardStyles.module.scss";
import ReadMoreButton from "../ReadMoreButton/ReadMoreButton";
import { Icon } from '@iconify/react';


const PlanetCard = (props: Record<string, any>) => {
    const { name, temperature, population, url } = props;
    const imageSrc = Math.ceil((Math.random() * 2) + 1)

    return (
            <div className={cx(styles.container, styles["content-wrapper"])}>
  
                <div className={cx(styles["news-card"])}>
    <img src={`/planet-${imageSrc}.jpg`} alt="card-img" className={cx(styles["news-card__image"])} />
    <div className={cx(styles["news-card__text-wrapper"])}>
        <h2 className={cx(styles["news-card__title"])}>{name}</h2>
                    <div className={cx(styles["news-card__details-wrapper"])}>
                        
                    <div className={cx(styles.labelWrapper)}>
            <Icon  icon="fluent:weather-hail-day-24-filled" color="white" className={cx(styles.icons)} />
                <small className={cx(styles.label)}>Temperature</small>
                </div>
                        <p className={cx(styles["news-card__excerpt"])}>{temperature}</p>
                        
                        <div className={cx(styles.labelWrapper)}>
            <Icon  icon="bi:people-fill" className={cx(styles.icons)} />
                <small className={cx(styles.label)}>Population</small>
                </div>
            <p className={cx(styles["news-card__excerpt"])}>{population}</p>
            <ReadMoreButton url={url} category='planets' imageId={imageSrc} />
      </div>
    </div>
                </div>  
        </div>
    )
}

export default PlanetCard;