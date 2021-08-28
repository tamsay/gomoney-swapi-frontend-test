import {useEffect, useState} from 'react';
import styles from './ReadMoreButtonStyles.module.scss';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const ReadMoreButton = (props: Record<string, any>) => {
    const { url, category, imageId } = props;
    const [id, setId] = useState("");

    useEffect(() => {
        let itemId = url.match(/\d+/);
        setId(itemId);
    },[url])

    return (
        <Link to={`/details-page/?category=${category}&id=${id}&imageId=${imageId}`
} className={cx(styles.container)}>
            Read More
            <Icon icon="flat-color-icons:reading" className={cx(styles.icons)}/>
        </Link>
    )
}

export default ReadMoreButton;