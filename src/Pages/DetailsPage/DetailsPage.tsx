/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useContext, useState, useEffect } from 'react';
import styles from "./DetailsPageStyles.module.scss";
import cx from "classnames";
import BackButton from "../../components/BackButton/BackButton";
import Spinner from "../../components/Spinner/Spinner";
import { SwapiContext } from '../../context/index';

const DetailsPage = () => {
    const { characters, planets, starships } = useContext(SwapiContext);
    const [cardName, setCardName] = useState(localStorage.getItem("cardName"));
    const [category, setCategory] = useState(localStorage.getItem("category"));
    const [data, setData] = useState<Record<string, any>>([])
console.log(category, cardName, characters)
    useEffect(() => {
        switch (true) {
            case category === "charactersCategory":
                setData(characters?.results.filter((element:any) => element.name === cardName));
                break;
        
            case category === "starshipsCategory":
                setData(starships?.results.filter((element:any) => element.name === cardName));
                break;
        
            default:
                setData(planets?.results.filter((element:any) => element.name === cardName));
                break;
        }
    }, [category, cardName, characters?.results, starships?.results, planets?.results]);
    console.log(planets, 'lll')
    return (
        <div className={cx(styles.container, "flex-col")}>
            
            {data ? <div>
                <img src="logo192.png" alt="" />
                <p>{data[0]?.name}</p>
                <p>{data[0]?.birth_year}</p>
                <p>{data[0]?.height || ""}</p> 
                <p>{data[0]?.manufacturer || ""}</p> 
                <p>{data[0]?.MGLT || ""}</p> 
                <p>{data[0]?.population || ""}</p>
                
            </div> : <Spinner height="75" type="BallTriangle" />}
            
            <BackButton />
        </div>
    )
}

export default DetailsPage;
