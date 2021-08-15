import React, {useContext, useState, useEffect} from "react";
import cx from 'classnames';
import styles from "./HomePageStyles.module.scss";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import CardGroup from "../../components/CardGroup/CardGroup";
import Spinner from "../../components/Spinner/Spinner";
import {PeopleContext, PlanetsContext, StarshipsContext} from "../../context/index";

const HomePage = () => {
    const people = useContext(PeopleContext)();
    const planets = useContext(PlanetsContext)();
    const starships = useContext(StarshipsContext)();
    const [peopleSpinner, setPeopleSpinner] = useState(true)
    const [starshipsSpinner, setStarshipsSpinner] = useState(true)
    const [planetsSpinner, setPlanetsSpinner] = useState(true)

    useEffect(() => {
        starships.length > 0 ? setStarshipsSpinner(false) : setStarshipsSpinner(true);
        planets.length > 0 ? setPlanetsSpinner(false) : setPlanetsSpinner(true);
        people.length > 0 ? setPeopleSpinner(false) : setPeopleSpinner(true);
    }, [people, planets, starships]);

    return (
        <div className={cx(styles.container, "flex-column")}>
            
            <div>
               <SectionHeader headerText="Popular Starships" />
                {starshipsSpinner ? <Spinner /> : <CardGroup data={starships} display="flex-col" />}; 
            </div>
            
            <div>
               <SectionHeader headerText="Popular Planets" />
                {planetsSpinner ? <Spinner /> : <CardGroup data={planets} display="flex-col" />};
            </div>
            
            <div>
               <SectionHeader headerText="Popular Characters" />
                {peopleSpinner ? <Spinner /> : <CardGroup data={people} display="flex-row" />};
            </div>
            

        </div>
    )
}

export default HomePage;