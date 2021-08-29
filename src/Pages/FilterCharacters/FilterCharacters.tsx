/* eslint-disable @typescript-eslint/no-unused-vars */
import {useState, useEffect} from 'react';
import styles from './FilterCharactersStyles.module.scss';
import cx from 'classnames';
import queryString from 'query-string';
import { useHistory, useLocation } from 'react-router-dom';
import { useAllCharacters } from '../../hooks/useAllCharacters';
import Header from '../../components/Header/Header';
import Spinner from '../../components/Spinner/Spinner';
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Pagination from "../../components/Pagination/Pagination";


const FilterCharacters = () => {
    let PageSize = 10;
    const history = useHistory();
    const search = useLocation().search;
    const searchTerm = queryString.parse(search);
    let filterQuery = searchTerm.filterQuery as string;

    const [allCharacters, setAllCharacters] = useState<string[]>([])
    
    const allCharactersArray: any = useAllCharacters()
    
    const [showDiv, setShowDiv] = useState(false);

    const [genderIcon, setGenderIcon] = useState("");
    const [genderValue, setGenderValue] = useState(filterQuery)

    const pageResult = Number(searchTerm.page);
    const [totalCountValue, setTotalCount] = useState(1);
    const [category, setCategory] = useState('');
    const [currentPage, setCurrentPage] = useState(pageResult);


    const getFilteredArray = (arrayData:string[], query:string) => {
        let filtered = arrayData.filter((element: any) => {
           return element.gender?.toLowerCase() === query.toLowerCase()
        });
        setGenderIcon(query);
        return filtered;
    }
    
    useEffect(() => {

        switch (filterQuery) {
            case 'all':
                setShowDiv(true)
                setAllCharacters(allCharactersArray);
        setGenderIcon(filterQuery);
                break;
            case 'male':
                setShowDiv(true)
                let maleCharacters = getFilteredArray(allCharactersArray, filterQuery);
                setAllCharacters(maleCharacters);
                break;
            
            case 'female':
                setShowDiv(true)
                let femaleCharacters = getFilteredArray(allCharactersArray, filterQuery);
                setAllCharacters(femaleCharacters);
                break;
            
            case 'hermaphrodite':
                setShowDiv(true)
                let hermaphroditeCharacters = getFilteredArray(allCharactersArray, filterQuery);
                setAllCharacters(hermaphroditeCharacters);
                break;
        
            default:
                setShowDiv(true)
                let robotCharacters = getFilteredArray(allCharactersArray, "n/a");
                setAllCharacters(robotCharacters);
                break;
        }

    }, [allCharactersArray, filterQuery])

    console.log(genderIcon)
    const handleChange = (e: Record<string, any>) => {
        let gender = e.target.value;
        setGenderValue(gender)
        history.push(`/filter-characters/?filterQuery=${gender}`)
    }
    
    return (
        <div className={cx(styles.container, "flex-col")}>
            <Header searchType="people" displaySearch />

            {
                showDiv ? 
                    <div className={cx(styles.cardWrapper, "flex-col")}>
                        <SectionHeader headerText="Filtered Result: Characters" />
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
                        {
                        allCharacters.length === 0 ? <Spinner height="50" type="BallTriangle" /> :
                        (<div className={cx(styles.cardWrapper)}>
                        {allCharacters.map((element: any, index:number) => {
                            return (
                                <CharacterCard key={index * 5} name={element.name || ""} birthYear={element.birth_year  || ""} gender={element.gender  || ""} url={element.url  || ""} />
                            )
                        })}</div>)
                    }
                </div> : ""
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

export default FilterCharacters;