import React from 'react';
import styles from './ForwardButtonStyles.module.scss'
import cx from 'classnames'
import { useHistory } from "react-router-dom";


const ForwardButton = () => {
    const history = useHistory()

    return (
        <div className={cx(styles.container)}>
            <button onClick={history.goForward}>Back</button>
        </div>
    )
}

export default ForwardButton;