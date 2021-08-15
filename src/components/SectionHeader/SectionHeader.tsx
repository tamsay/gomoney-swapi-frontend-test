import React from 'react';
import styles from './SectionHeaderStyles.module.scss';
import cx from 'classnames';

const SectionHeader = (props: Record<string, any>) => {
    const  {headerText}  = props;
    return (
        <div className={cx(styles.container, "flex-col")}>
            <p>{headerText}</p>
            <hr />
        </div>
    )
}

export default SectionHeader;