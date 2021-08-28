import React from 'react';
import styles from './BackButtonStyles.module.scss'
import cx from 'classnames'
import { useHistory } from "react-router-dom";
import { Icon } from '@iconify/react';


const BackButton = () => {
    const history = useHistory()

    return (
        <div className={cx(styles.container)}>
            <button onClick={history.goBack}> <Icon icon="bi:arrow-bar-left" className={cx(styles.icon)} />Back</button>
        </div>
    )
}

export default BackButton;