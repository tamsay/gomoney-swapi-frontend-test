import React from 'react';
import styles from './BackButtonStyles.module.scss'
import cx from 'classnames'
import { useHistory } from "react-router-dom";


const BackButton = () => {
    const history = useHistory()

    return (
        <div className={cx(styles.container)}>
            <button onClick={history.goBack}>Back</button>
        </div>
    )
}

export default BackButton;