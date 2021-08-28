import { useContext } from "react";
import {useHistory} from 'react-router-dom';
import cx from 'classnames';
import styles from "./HomePageStyles.module.scss";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Spinner from "../../components/Spinner/Spinner";
import StarshipCard from "../../components/StarshipCard/StarshipCard";
import PlanetCard from "../../components/PlanetCard/PlanetCard";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import { SwapiContext } from "../../context/index";
import Header from '../../components/Header/Header';
import { Icon } from '@iconify/react';


// Spinner types
// "Audio" | "BallTriangle" | "Bars" | "Circles" | "Grid" | "Hearts" | "Oval" | "Puff" | "Rings" | "TailSpin" | "ThreeDots" | "Watch" | "RevolvingDot" | "Triangle" | "Plane" | "MutatingDots" | "CradleLoader"

const HomePage = () => {

    const history = useHistory();

    const { characters, planets, starships } = useContext(SwapiContext);

    const ViewAll = (category: string) => {
        history.push(`/view-all/?category=${category}&page=1`)
    }
    
    return (
        <div className={cx(styles.container, "flex-col")}>
            <Header searchType="general" displaySearch />
            <div className={cx(styles.sectionWrapper, "flex-col")}>
                <SectionHeader headerText="Popular Starships" />
                {
                    !starships ? <Spinner height="50" type="BallTriangle"/> :
                    (<div className={cx(styles.cardWrapper)}>
                    {starships.results.slice(0,6).map((element: any, index:number) => {
                        return (
                            <StarshipCard key={index * 5} name={element.name} model={element.model} cargoCapacity={element.cargo_capacity} url={element.url} />
                        )
                    })}</div>)
                }
                <button onClick={()=>ViewAll("starships")}> View All <Icon icon="wpf:view-file" className={cx(styles.icons)}/></button>
            </div>
            
            <div className={cx(styles.sectionWrapper, "flex-col")}>
                <SectionHeader headerText="Popular Planets" />
						<div className={cx(styles.outerPlanetWrapper)}>
              
                            {
                    !planets ? <Spinner height="50" type="BallTriangle"/> :
                    (<div className={cx(styles.planetWrapper)}>
                    {planets.results.map((element: any, index:number) => {
                        return (
                            <PlanetCard key={index * 5} name={element.name} temperature={element.climate} population={element.population} url={element.url}/>
                        )
                    })}</div>)
                    }
						</div>

                <button onClick={()=>ViewAll("planets")}>View All <Icon icon="wpf:view-file" className={cx(styles.icons)}/></button>
            
            </div>
          
            
            <div className={cx(styles.sectionWrapper, styles.charactersSectionWrapper,  "flex-col")}>
               <SectionHeader headerText="Popular Characters" />
                {
                    !characters ? <Spinner height="50" type="BallTriangle"/> :
                    (<div className={cx(styles.cardWrapper, styles.charactersWrapper)}>
                    {characters.results.slice(0,4).map((element: any, index:number) => {
                        return (
                            <CharacterCard key={index * 5} name={element.name} birthYear={element.birth_year} gender={element.gender} url={element.url} />
                        )
                    })}</div>)
                }
                <button onClick={()=>ViewAll("characters")}>View All <Icon icon="wpf:view-file" className={cx(styles.icons)}/></button>
            </div>
        </div>
    )
}

export default HomePage;