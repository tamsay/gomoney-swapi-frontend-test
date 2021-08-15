import React, {useState, useEffect} from 'react';
import cx from 'classnames';
import styles from "./CardGroupStyles.module.scss";
import Card from "../Card/Card";

interface CardInterface {
    data: Array<any>;
    display: string;
}

const CardGroup = (props: CardInterface) => {
    const { data, display } = props;

    const [cardData, setData] = useState<string[]>([]);
    
    useEffect(() => {
        setData(data);
    }, [data]);

    return (
        <div className={cx(styles.container)}>
            
            <div className={cx("flex-row", styles.cardWrapper)}> 
                {cardData.map((element: any, index:number) => {
                    return (
                        <Card key={index * 5} name={element.name} title={element.title} mass={ element.mass} display={display} />
                    )
                })}
            </div>
        </div>
    )
}

export default CardGroup;