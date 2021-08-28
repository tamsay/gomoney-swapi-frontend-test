import { useState, useEffect } from 'react';
import styles from "./DetailsPageStyles.module.scss";
import cx from "classnames";
import BackButton from "../../components/BackButton/BackButton";
import Spinner from "../../components/Spinner/Spinner";
import Header from '../../components/Header/Header';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import queryString from 'query-string';
import { Icon } from '@iconify/react';



const DetailsPage = () => {

    const search = useLocation().search;
    const searchTerm = queryString.parse(search);
    const searchCategory = searchTerm.category;
    const id = searchTerm.id;
    const imageId = searchTerm.imageId;

    const [data, setData] = useState<Record<string, any>>([])
    const [imageCategory, setImageCategory] = useState("");

    const defaultUrl = "https://swapi.dev/api";

    const getData = async (dataCategory:any, dataId:any) => {
        const result = await axios.get(`${defaultUrl}/${dataCategory}/${dataId}`);
        setData(result.data)
    }
    useEffect(() => {
        switch (searchCategory) {
            case "people":
                getData(searchCategory, id);
                setImageCategory("character")
                break;
        
            case "starships":
                getData(searchCategory, id)
                setImageCategory("starship")

               break;        
            default:
                getData(searchCategory, id)
                setImageCategory("planet-plain")
                break;
        }
    }, [searchCategory, id]);

    return (
        <div className={cx(styles.container, "flex-col")}>
            <Header displaySearch={false} displayHeaderHero={false} />
            {data ?
                <div className={cx(styles.content)}>
                    <div className={cx(styles.imageHeaderSection)}>
                    <img src={`/${imageCategory}-${imageId}.jpg`} alt="card-img" className={cx(styles.heroImage)}/>
                        <div className={cx(styles.nameDiv)}>
                            {data?.name}
                        </div>
                        <div className={cx(styles.navigationDiv)}>
                            Navigation Here
                        </div>
                    </div>

                    <div className={cx(styles.otherInfoSection)}>

                        {/* {data?.name ? <div className={cx(styles.cardWrapper)}>
                            <div className={cx(styles.labelWrapper)}>
                                <Icon icon="bi:person-circle" className={cx(styles.icons)} />
                                <small className={cx(styles.label)}>Name</small>
                            </div>
                            <p>{data?.name}</p>
                        </div> : ""} */}
                        

                        {data.birth_year ? <div className={cx(styles.cardWrapper)}>
                            <div className={cx(styles.labelWrapper)}>
                                <Icon icon="iwwa:year" className={cx(styles.icons)} />
                                <small className={cx(styles.label)}>Birth Year</small>
                            </div>
                            <p>{data?.birth_year}</p>
                        </div> : " "}
                        

                        {data?.height ? <div className={cx(styles.cardWrapper)}>
                            <div className={cx(styles.labelWrapper)}>
                                <Icon icon="mdi:human-male-height-variant" className={cx(styles.icons)} />
                                <small className={cx(styles.label)}>Height</small>
                            </div>
                            <p>{data?.height || ""}</p> 
               
                        </div> : ""}
                        
                        {data?.mass ? <div className={cx(styles.cardWrapper)}>
                            <div className={cx(styles.labelWrapper)}>
                                <Icon icon="mdi:weight-kilogram" className={cx(styles.icons)} />
                                <small className={cx(styles.label)}>Mass</small>
                            </div>
                            <p>{data?.mass || ""}</p> 
               
                        </div> : ""}

                        {data?.hair_color ? <div className={cx(styles.cardWrapper)}>
                            <div className={cx(styles.labelWrapper)}>
                                <Icon icon="noto:man-light-skin-tone-red-hair" className={cx(styles.icons)} />
                                <small className={cx(styles.label)}>Hair Color</small>
                            </div>
                            <p>{data?.hair_color || ""}</p> 
               
                        </div> : ""}

                        {data?.skin_color ? <div className={cx(styles.cardWrapper)}>
                            <div className={cx(styles.labelWrapper)}>
                                <Icon icon="ion:body" className={cx(styles.icons)} />
                                <small className={cx(styles.label)}>Skin Color</small>
                            </div>
                            <p>{data?.skin_color || ""}</p> 
               
                        </div> : ""}

                        {data?.eye_color ? <div className={cx(styles.cardWrapper)}>
                            <div className={cx(styles.labelWrapper)}>
                                <Icon icon="noto:eye" className={cx(styles.icons)} />
                                <small className={cx(styles.label)}>Eye Color</small>
                            </div>
                            <p>{data?.eye_color || ""}</p> 
               
                        </div> : ""}

                        {data?.gender ? <div className={cx(styles.cardWrapper)}>
                            <div className={cx(styles.labelWrapper)}>
                                <Icon icon="map:unisex" className={cx(styles.icons)} />
                                <small className={cx(styles.label)}>Gender</small>
                            </div>
                            <p>{data?.gender || ""}</p> 
               
                        </div> : ""}

                        {data?.rotation_period ? <div className={cx(styles.cardWrapper)}>
                            <div className={cx(styles.labelWrapper)}>
                                <Icon icon="eos-icons:arrow-rotate" className={cx(styles.icons)} />
                                <small className={cx(styles.label)}>Rotation Period</small>
                            </div>
                            <p>{data?.rotation_period || ""}</p> 
               
                        </div> : ""}

                        {data?.orbital_period ? <div className={cx(styles.cardWrapper)}>
                            <div className={cx(styles.labelWrapper)}>
                                <Icon icon="eos-icons:arrow-rotate" className={cx(styles.icons)} />
                                <small className={cx(styles.label)}>Orbital Period</small>
                            </div>
                            <p>{data?.orbital_period || ""}</p> 
               
                        </div> : ""}

                        {data?.diameter ? <div className={cx(styles.cardWrapper)}>
                            <div className={cx(styles.labelWrapper)}>
                                <Icon icon="mdi:diameter" className={cx(styles.icons)} />
                                <small className={cx(styles.label)}>Diameter</small>
                            </div>
                            <p>{data?.diameter || ""}</p> 
               
                        </div> : ""}

                        {data?.climate ? <div className={cx(styles.cardWrapper)}>
                            <div className={cx(styles.labelWrapper)}>
                                <Icon  icon="fluent:weather-hail-day-48-filled" className={cx(styles.icons)} />
                                <small className={cx(styles.label)}>Climate</small>
                            </div>
                            <p>{data?.climate || ""}</p> 
               
                        </div> : ""}

                        {data?.gravity ? <div className={cx(styles.cardWrapper)}>
                            <div className={cx(styles.labelWrapper)}>
                                <Icon icon="ant-design:fall-outlined" className={cx(styles.icons)} />
                                <small className={cx(styles.label)}>Gravity</small>
                            </div>
                            <p>{data?.gravity || ""}</p> 
               
                        </div> : ""}

                        {data?.terrain ? <div className={cx(styles.cardWrapper)}>
                            <div className={cx(styles.labelWrapper)}>
                                <Icon  icon="emojione-monotone:mountain" className={cx(styles.icons)} />
                                <small className={cx(styles.label)}>Terrain</small>
                            </div>
                            <p>{data?.terrain || ""}</p> 
               
                        </div> : ""}

                        {data?.surface_water ? <div className={cx(styles.cardWrapper)}>
                            <div className={cx(styles.labelWrapper)}>
                                <Icon icon="bi:water" className={cx(styles.icons)} />
                                <small className={cx(styles.label)}>Surface Water</small>
                            </div>
                            <p>{data?.surface_water || ""}</p> 
               
                        </div> : ""}

                        {data?.manufacturer ? <div className={cx(styles.cardWrapper)}>
                            <div className={cx(styles.labelWrapper)}>
                                <Icon icon="simple-icons:starship" className={cx(styles.icons)} />
                                <small className={cx(styles.label)}>Manufacturer</small>
                            </div>
                            <p>{data?.manufacturer || ""}</p> 
                        </div> : ""}
                        
                        {data?.model  ? <div className={cx(styles.cardWrapper)}>
                            <div className={cx(styles.labelWrapper)}>
                                <Icon icon="fa-solid:space-shuttle" className={cx(styles.icons)} />
                                <small className={cx(styles.label)}>Model</small>
                            </div>
                            <p>{data?.model || ""}</p> 
                        </div> : ""}

                        {data?.MGLT ? <div className={cx(styles.cardWrapper)}>
                            <div className={cx(styles.labelWrapper)}>
                                <Icon icon="whh:speed" className={cx(styles.icons)} />
                                <small className={cx(styles.label)}>MGLT</small>
                            </div>
                            <p>{data?.MGLT || ""}</p> 
                        </div> : ""}


                        {data?.population ? <div className={cx(styles.cardWrapper)}>
                            <div className={cx(styles.labelWrapper)}>
                                <Icon icon="akar-icons:people-group" className={cx(styles.icons)} />
                                <small className={cx(styles.label)}>Population</small>
                            </div>
                            <p>{data?.population || ""}</p>
                        </div> : ""}
                        
                        {data?.passengers  ? <div className={cx(styles.cardWrapper)}>
                            <div className={cx(styles.labelWrapper)}>
                                <Icon icon="carbon:passenger-plus" className={cx(styles.icons)} />
                                <small className={cx(styles.label)}>Passengers</small>
                            </div>
                            <p>{data?.passengers || ""}</p> 
                        </div> : ""}

                        {data?.cost_in_credits  ? <div className={cx(styles.cardWrapper)}>
                            <div className={cx(styles.labelWrapper)}>
                                <Icon icon="emojione:money-bag" className={cx(styles.icons)} />
                                <small className={cx(styles.label)}>Cost In Credits</small>
                            </div>
                            <p>{data?.cost_in_credits || ""}</p> 
                        </div> : ""}

                        {data?.length  ? <div className={cx(styles.cardWrapper)}>
                            <div className={cx(styles.labelWrapper)}>
                                <Icon icon="emojione:straight-ruler" hFlip={true} className={cx(styles.icons)} />
                                <small className={cx(styles.label)}>Length</small>
                            </div>
                            <p>{data?.length || ""}</p> 
                        </div> : ""}

                        {data?.max_atmosphering_speed  ? <div className={cx(styles.cardWrapper)}>
                            <div className={cx(styles.labelWrapper)}>
                                <Icon icon="whh:speed"  className={cx(styles.icons)} />
                                <small className={cx(styles.label)}>Max Atmosphering Speed</small>
                            </div>
                            <p>{data?.max_atmosphering_speed || ""}</p> 
                        </div> : ""}

                        {data?.crew  ? <div className={cx(styles.cardWrapper)}>
                            <div className={cx(styles.labelWrapper)}>
                                <Icon icon="healthicons:factory-worker" className={cx(styles.icons)} />
                                <small className={cx(styles.label)}>Crew</small>
                            </div>
                            <p>{data?.crew || ""}</p> 
                        </div> : ""}

                        {data?.cargo_capacity  ? <div className={cx(styles.cardWrapper)}>
                            <div className={cx(styles.labelWrapper)}>
                                <Icon icon="clarity:container-volume-solid" className={cx(styles.icons)} />
                                <small className={cx(styles.label)}>Cargo Capacity</small>
                            </div>
                            <p>{data?.cargo_capacity || ""}</p> 
                        </div> : ""}

                        {data?.consumables  ? <div className={cx(styles.cardWrapper)}>
                            <div className={cx(styles.labelWrapper)}>
                                <Icon icon="dashicons:food" className={cx(styles.icons)} />
                                <small className={cx(styles.label)}>Consumables</small>
                            </div>
                            <p>{data?.consumables || ""}</p> 
                        </div> : ""}

                        {data?.hyperdrive_rating  ? <div className={cx(styles.cardWrapper)}>
                            <div className={cx(styles.labelWrapper)}>
                                <Icon icon="ic:outline-grade" className={cx(styles.icons)} />
                                <small className={cx(styles.label)}>Hyperdrive Rating</small>
                            </div>
                            <p>{data?.hyperdrive_rating || ""}</p> 
                        </div> : ""}

                        {data?.starship_class  ? <div className={cx(styles.cardWrapper)}>
                            <div className={cx(styles.labelWrapper)}>
                                <Icon rotate={3} icon="fa-solid:space-shuttle" className={cx(styles.icons)} />
                                <small className={cx(styles.label)}>Starship Class</small>
                            </div>
                            <p>{data?.starship_class || ""}</p> 
                        </div> : ""}

                        {/* {data?.  ? <div className={cx(styles.cardWrapper)}>
                            <div className={cx(styles.labelWrapper)}>
                                <Icon icon="bi:person-circle" className={cx(styles.icons)} />
                                <small className={cx(styles.label)}></small>
                            </div>
                            <p>{data?. || ""}</p> 
                        </div> : ""} */}
                        

                     

                    </div>
              
                
            </div> : <Spinner height="75" type="BallTriangle" />}
            
            <div className={cx(styles.backButton)}>
                <BackButton />
            </div>
        </div>
    )
}

export default DetailsPage;
