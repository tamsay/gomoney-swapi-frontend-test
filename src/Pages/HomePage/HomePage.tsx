import React, {useContext} from "react";
import cx from 'classnames';
import styles from "./HomePageStyles.module.scss";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Spinner from "../../components/Spinner/Spinner";
import StarshipCard from "../../components/StarshipCard/StarshipCard";
import PlanetCard from "../../components/PlanetCard/PlanetCard";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import {SwapiContext} from "../../context/index";

const HomePage = () => {

    const { characters, planets, starships } = useContext(SwapiContext);
    
    return (
        <div className={cx(styles.container, "flex-column")}>
            
            <div>
               <SectionHeader headerText="Popular Starships" />
                {
                    !starships ? <Spinner /> :
                    (<div className={cx(styles.cardWrapper)}>
                    {starships.results.slice(0,6).map((element: any, index:number) => {
                        return (
                            <StarshipCard key={index * 5} name={element.name} model={element.model} cargoCapacity={element.cargo_capacity} />
                        )
                    })}</div>)
                };
                <button>View All</button>
            </div>
            
            <div>
               <SectionHeader headerText="Popular Planets" />
                {
                    !planets ? <Spinner /> :
                    (<div className={cx(styles.cardWrapper)}>
                    {planets.results.map((element: any, index:number) => {
                        return (
                            <PlanetCard key={index * 5} name={element.name} temperature={element.climate} population={element.population}/>
                        )
                    })}</div>)
                };
                <button>View All</button>
            </div>
            
            <div>
               <SectionHeader headerText="Popular Characters" />
                {
                    !characters ? <Spinner /> :
                    (<div className={cx(styles.cardWrapper)}>
                    {characters.results.slice(0,4).map((element: any, index:number) => {
                        return (
                            <CharacterCard key={index * 5} name={element.name} birthYear={element.birth_year} gender={element.gender} />
                        )
                    })}</div>)
                };
                <button>View All</button>
            </div>
        </div>
    )
}

export default HomePage;