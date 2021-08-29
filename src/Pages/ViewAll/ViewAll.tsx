import { useContext, useState, useEffect } from 'react';
import axios from "axios";
import styles from './ViewAllStyles.module.scss';
import cx from 'classnames';
import queryString from 'query-string';
import { useLocation, useHistory } from 'react-router-dom';
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Spinner from "../../components/Spinner/Spinner";
import StarshipCard from "../../components/StarshipCard/StarshipCard";
import PlanetCard from "../../components/PlanetCard/PlanetCard";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import Pagination from "../../components/Pagination/Pagination";
import Header from '../../components/Header/Header';
import { SwapiContext } from '../../context';

const ViewAll = () => {
    let PageSize = 10;
    const { charactersCount, planetsCount, starshipsCount } = useContext(SwapiContext);

    const [starshipsData, setStarships] = useState([])
    const [planetsData, setPlanets] = useState([])
    const [charactersData, setCharacters] = useState([])
    
    const [totalCountValue, setTotalCount] = useState(1);
    const [category, setCategory] = useState('');

    const search = useLocation().search;
    const searchTerm = queryString.parse(search);
    const searchTermResult = searchTerm.category;
    const pageResult = Number(searchTerm.page);

    const history = useHistory();

    const [currentPage, setCurrentPage] = useState(pageResult);
    const [genderValue, setGenderValue] = useState('All')

    const defaultUrl = "https://swapi.dev/api";

    const getData = async (category: string, page: number) => {
        const data = await axios.get(`${defaultUrl}/${category}?page=${page}`);
        return data.data.results;
    }
    const handleChange = (e: Record<string, any>) => {
        let gender = e.target.value;
        
        setGenderValue(gender);
        history.push(`/filter-characters/?filterQuery=${gender}`)
    }

    useEffect(() => {

        (async () => {
            if (searchTermResult === 'starships') {
                setCategory(searchTermResult);
                setTotalCount(starshipsCount as any);
                setStarships(await getData(searchTermResult, currentPage))
            }
            else if (searchTermResult === 'characters') {
                    setCategory(searchTermResult);
                    setTotalCount(charactersCount as any);
                setCharacters(await getData("people", currentPage));
            }
            else if (searchTermResult === 'planets') {
                setCategory(searchTermResult);
                    setTotalCount(planetsCount as any);
                setPlanets(await getData(searchTermResult, currentPage));
            }
        })();
        
    },[charactersCount, currentPage, planetsCount, searchTermResult, starshipsCount])
    return (
        <div className={cx(styles.container, "flex-col")}>
            <Header displaySearch searchType={searchTermResult} />

            {
                    category === 'starships' ? 
                    <div className={cx(styles.sectionWrapper, "flex-col")}>
                    <SectionHeader headerText="All Starships" />
                    {
                        starshipsData.length === 0 ? <Spinner height="50" type="BallTriangle"/> :
                        (<div className={cx(styles.cardWrapper)}>
                        {starshipsData.map((element: any, index:number) => {
                            return (
                                <StarshipCard key={index * 5} name={element.name} model={element.model} cargoCapacity={element.cargo_capacity} url={element.url} />
                            )
                        })}</div>)
                    }
                </div> : ""
            }

{
                    category === 'planets' ? 
                    <div className={cx(styles.sectionWrapper, "flex-col")}>
                    <SectionHeader headerText="All Planets" />                  
                                {
                        planetsData.length === 0 ? <Spinner height="50" type="BallTriangle"/> :
                        (<div className={cx(styles.planetWrapper)}>
                        {planetsData.map((element: any, index:number) => {
                            return (
                                <PlanetCard key={index * 5} name={element.name} temperature={element.climate} population={element.population} url={element.url} />
                            )
                        })}</div>)
                        }
                </div> : ""
                                   
            }
            

            {
                    category === 'characters' ? 
                    (<div className={cx(styles.sectionWrapper, "flex-col")}>
                        <SectionHeader headerText="All Characters" />
                        <div className={cx(styles.selectWrapper, "flex-col")}>
                        <label className={cx(styles.labelWrapper, "flex-row")}>
          Filter by Gender:
                                <select value={genderValue} onChange={(e)=>handleChange(e)}>
            <option value="all">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="hermaphrodite">Hermaphrodite</option>
            <option value="unknown">Robot</option>
          </select>
        </label>
                        </div>
                    
                        {charactersData.length === 0 ? <Spinner height="50" type="BallTriangle" /> : (<div className={cx(styles.cardWrapper)}>
                            {charactersData?.map((element: any, index: number) => {
                                return (
                                    <CharacterCard key={index * 5} name={element.name} birthYear={element.birth_year} gender={element.gender} url={element.url} />
                                )
                            })}</div>)}
                        </div>) : ""
            }
            
            <Pagination
                className={cx(styles["pagination-bar"])}
        currentPage={currentPage}
        totalCount={totalCountValue}
        pageSize={PageSize}
                onPageChange={(page: number) => setCurrentPage(page)}
                category={category}
      />
        </div>
    )
}

export default ViewAll;