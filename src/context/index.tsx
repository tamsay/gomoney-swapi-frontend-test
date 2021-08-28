// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { createContext, useEffect, useState, ReactNode } from "react";
import axios from "axios";

interface swapiContextInterface {
    starships: Record<string, any> | null;
    characters: Record<string, any> | null;
  planets: Record<string, any> | null;
  charactersCount: Record<string, any> | null;
  planetsCount: Record<string, any> | null;
  starshipsCount: Record<string, any> | null;
  // allStarships: Record<string, any> | null;
  // allPlanets: Record<string, any> | null;
  // allCharacters: Record<string, any> | null;
    error: any;
  }
  interface Props {
    children: ReactNode;
  }
export const SwapiContext = createContext({} as swapiContextInterface);

const SwapiContextProvider = (props: Props) => {

  const [starships, setStarShips] = useState<null | Record<string, any>>(null);
  const [characters, setCharacters] = useState<null | Record<string, any>>(null);
  const [planets, setPlanets] = useState<null | Record<string, any>>(null);

  // const [charactersCount, setCharactersCount] = useState<null | Record<string, any>>(null);
  // const [planetsCount, setPlanetsCount] = useState<null | Record<string, any>>(null);
  // const [starshipsCount, setStarShipsCount] = useState<null | Record<string, any>>(null);

  const [charactersCount, setCharactersCount] = useState<any>(null);
  const [planetsCount, setPlanetsCount] = useState<any>(null);
  const [starshipsCount, setStarShipsCount] = useState<any>(null);
 

  const [error, setError] = useState<any>(null);
    
    const defaultUrl = "https://swapi.dev/api";

    useEffect(() => {
      const swapiData = async () => {
        // let starshipsOutput = {
        //   count: 6,
        //   results: [{
        //     "name": "CR90 corvette",
        //     "model": "CR90 corvette",
        //     "manufacturer": "Corellian Engineering Corporation",
        //     "cost_in_credits": "3500000",
        //     "length": "150",
        //     "max_atmosphering_speed": "950",
        //     "crew": "30-165",
        //     "passengers": "600",
        //     "cargo_capacity": "3000000",
        //     "consumables": "1 year",
        //     "hyperdrive_rating": "2.0",
        //     "MGLT": "60",
        //     "starship_class": "corvette",
        //     "pilots": [],
        //     "films": [
        //       1,
        //       3,
        //       6
        //     ],
        //     "created": "2014-12-10T14:20:33.369000Z",
        //     "edited": "2014-12-20T21:23:49.867000Z",
        //     "url": 2
        //   },
        //   {
        //     "name": "CR90 corvette",
        //     "model": "CR90 corvette",
        //     "manufacturer": "Corellian Engineering Corporation",
        //     "cost_in_credits": "3500000",
        //     "length": "150",
        //     "max_atmosphering_speed": "950",
        //     "crew": "30-165",
        //     "passengers": "600",
        //     "cargo_capacity": "3000000",
        //     "consumables": "1 year",
        //     "hyperdrive_rating": "2.0",
        //     "MGLT": "60",
        //     "starship_class": "corvette",
        //     "pilots": [],
        //     "films": [
        //       1,
        //       3,
        //       6
        //     ],
        //     "created": "2014-12-10T14:20:33.369000Z",
        //     "edited": "2014-12-20T21:23:49.867000Z",
        //     "url": 2
        //   },
        //   {
        //     "name": "CR90 corvette",
        //     "model": "CR90 corvette",
        //     "manufacturer": "Corellian Engineering Corporation",
        //     "cost_in_credits": "3500000",
        //     "length": "150",
        //     "max_atmosphering_speed": "950",
        //     "crew": "30-165",
        //     "passengers": "600",
        //     "cargo_capacity": "3000000",
        //     "consumables": "1 year",
        //     "hyperdrive_rating": "2.0",
        //     "MGLT": "60",
        //     "starship_class": "corvette",
        //     "pilots": [],
        //     "films": [
        //       1,
        //       3,
        //       6
        //     ],
        //     "created": "2014-12-10T14:20:33.369000Z",
        //     "edited": "2014-12-20T21:23:49.867000Z",
        //     "url": 2
        //     },
        //     {
        //       "name": "CR90 corvette",
        //       "model": "CR90 corvette",
        //       "manufacturer": "Corellian Engineering Corporation",
        //       "cost_in_credits": "3500000",
        //       "length": "150",
        //       "max_atmosphering_speed": "950",
        //       "crew": "30-165",
        //       "passengers": "600",
        //       "cargo_capacity": "3000000",
        //       "consumables": "1 year",
        //       "hyperdrive_rating": "2.0",
        //       "MGLT": "60",
        //       "starship_class": "corvette",
        //       "pilots": [],
        //       "films": [
        //         1,
        //         3,
        //         6
        //       ],
        //       "created": "2014-12-10T14:20:33.369000Z",
        //       "edited": "2014-12-20T21:23:49.867000Z",
        //       "url": 2
        //     },
        //     {
        //       "name": "CR90 corvette",
        //       "model": "CR90 corvette",
        //       "manufacturer": "Corellian Engineering Corporation",
        //       "cost_in_credits": "3500000",
        //       "length": "150",
        //       "max_atmosphering_speed": "950",
        //       "crew": "30-165",
        //       "passengers": "600",
        //       "cargo_capacity": "3000000",
        //       "consumables": "1 year",
        //       "hyperdrive_rating": "2.0",
        //       "MGLT": "60",
        //       "starship_class": "corvette",
        //       "pilots": [],
        //       "films": [
        //         1,
        //         3,
        //         6
        //       ],
        //       "created": "2014-12-10T14:20:33.369000Z",
        //       "edited": "2014-12-20T21:23:49.867000Z",
        //       "url": 2
        //     },
        //     {
        //       "name": "CR90 corvette",
        //       "model": "CR90 corvette",
        //       "manufacturer": "Corellian Engineering Corporation",
        //       "cost_in_credits": "3500000",
        //       "length": "150",
        //       "max_atmosphering_speed": "950",
        //       "crew": "30-165",
        //       "passengers": "600",
        //       "cargo_capacity": "3000000",
        //       "consumables": "1 year",
        //       "hyperdrive_rating": "2.0",
        //       "MGLT": "60",
        //       "starship_class": "corvette",
        //       "pilots": [],
        //       "films": [
        //         1,
        //         3,
        //         6
        //       ],
        //       "created": "2014-12-10T14:20:33.369000Z",
        //       "edited": "2014-12-20T21:23:49.867000Z",
        //       "url": 2
        //     }
        //   ]
        // }

        // let planetsOutput = {
        //   count: 6,
        //   results: [{
        //     "name": "Tatooine",
        //     "rotation_period": "23",
        //     "orbital_period": "304",
        //     "diameter": "10465",
        //     "climate": "arid",
        //     "gravity": "1 standard",
        //     "terrain": "desert",
        //     "surface_water": "1",
        //     "population": "200000",
        //     "residents": [
        //       1,
        //       2,
        //       4,
        //       6,
        //       7,
        //       8,
        //       9,
        //       11,
        //       43,
        //       62
        //     ],
        //     "films": [
        //       1,
        //       3,
        //       4,
        //       5,
        //       6
        //     ],
        //     "created": "2014-12-09T13:50:49.641000Z",
        //     "edited": "2014-12-20T20:58:18.411000Z",
        //     "url": 1
        //   },
        //   {
        //     "name": "Tatooine",
        //     "rotation_period": "23",
        //     "orbital_period": "304",
        //     "diameter": "10465",
        //     "climate": "arid",
        //     "gravity": "1 standard",
        //     "terrain": "desert",
        //     "surface_water": "1",
        //     "population": "200000",
        //     "residents": [
        //       1,
        //       2,
        //       4,
        //       6,
        //       7,
        //       8,
        //       9,
        //       11,
        //       43,
        //       62
        //     ],
        //     "films": [
        //       1,
        //       3,
        //       4,
        //       5,
        //       6
        //     ],
        //     "created": "2014-12-09T13:50:49.641000Z",
        //     "edited": "2014-12-20T20:58:18.411000Z",
        //     "url": 1
        //     },
        //     {
        //       "name": "Tatooine",
        //       "rotation_period": "23",
        //       "orbital_period": "304",
        //       "diameter": "10465",
        //       "climate": "arid",
        //       "gravity": "1 standard",
        //       "terrain": "desert",
        //       "surface_water": "1",
        //       "population": "200000",
        //       "residents": [
        //         1,
        //         2,
        //         4,
        //         6,
        //         7,
        //         8,
        //         9,
        //         11,
        //         43,
        //         62
        //       ],
        //       "films": [
        //         1,
        //         3,
        //         4,
        //         5,
        //         6
        //       ],
        //       "created": "2014-12-09T13:50:49.641000Z",
        //       "edited": "2014-12-20T20:58:18.411000Z",
        //       "url": 1
        //     },
        //     {
        //       "name": "Tatooine",
        //       "rotation_period": "23",
        //       "orbital_period": "304",
        //       "diameter": "10465",
        //       "climate": "arid",
        //       "gravity": "1 standard",
        //       "terrain": "desert",
        //       "surface_water": "1",
        //       "population": "200000",
        //       "residents": [
        //         1,
        //         2,
        //         4,
        //         6,
        //         7,
        //         8,
        //         9,
        //         11,
        //         43,
        //         62
        //       ],
        //       "films": [
        //         1,
        //         3,
        //         4,
        //         5,
        //         6
        //       ],
        //       "created": "2014-12-09T13:50:49.641000Z",
        //       "edited": "2014-12-20T20:58:18.411000Z",
        //       "url": 1
        //     },
        //     {
        //       "name": "Tatooine",
        //       "rotation_period": "23",
        //       "orbital_period": "304",
        //       "diameter": "10465",
        //       "climate": "arid",
        //       "gravity": "1 standard",
        //       "terrain": "desert",
        //       "surface_water": "1",
        //       "population": "200000",
        //       "residents": [
        //         1,
        //         2,
        //         4,
        //         6,
        //         7,
        //         8,
        //         9,
        //         11,
        //         43,
        //         62
        //       ],
        //       "films": [
        //         1,
        //         3,
        //         4,
        //         5,
        //         6
        //       ],
        //       "created": "2014-12-09T13:50:49.641000Z",
        //       "edited": "2014-12-20T20:58:18.411000Z",
        //       "url": 1
        //     },
        //     {
        //       "name": "Tatooine",
        //       "rotation_period": "23",
        //       "orbital_period": "304",
        //       "diameter": "10465",
        //       "climate": "arid",
        //       "gravity": "1 standard",
        //       "terrain": "desert",
        //       "surface_water": "1",
        //       "population": "200000",
        //       "residents": [
        //         1,
        //         2,
        //         4,
        //         6,
        //         7,
        //         8,
        //         9,
        //         11,
        //         43,
        //         62
        //       ],
        //       "films": [
        //         1,
        //         3,
        //         4,
        //         5,
        //         6
        //       ],
        //       "created": "2014-12-09T13:50:49.641000Z",
        //       "edited": "2014-12-20T20:58:18.411000Z",
        //       "url": 1
        //     }
        //   ]
        // };

        // let charactersOutput = {
        //   count: 6,
        //   results: [{
        //     "name": "Luke Skywalker",
        //     "height": "172",
        //     "mass": "77",
        //     "hair_color": "blond",
        //     "skin_color": "fair",
        //     "eye_color": "blue",
        //     "birth_year": "19BBY",
        //     "gender": "male",
        //     "homeworld": 1,
        //     "films": [
        //       1,
        //       2,
        //       3,
        //       6
        //     ],
        //     "species": [],
        //     "vehicles": [
        //       14,
        //       30
        //     ],
        //     "starships": [
        //       12,
        //       22
        //     ],
        //     "created": "2014-12-09T13:50:51.644000Z",
        //     "edited": "2014-12-20T21:17:56.891000Z",
        //     "url": 1
        //   },
        //   {
        //     "name": "Luke Skywalker",
        //     "height": "172",
        //     "mass": "77",
        //     "hair_color": "blond",
        //     "skin_color": "fair",
        //     "eye_color": "blue",
        //     "birth_year": "19BBY",
        //     "gender": "male",
        //     "homeworld": 1,
        //     "films": [
        //       1,
        //       2,
        //       3,
        //       6
        //     ],
        //     "species": [],
        //     "vehicles": [
        //       14,
        //       30
        //     ],
        //     "starships": [
        //       12,
        //       22
        //     ],
        //     "created": "2014-12-09T13:50:51.644000Z",
        //     "edited": "2014-12-20T21:17:56.891000Z",
        //     "url": 1
        //     },
        //     {
        //       "name": "Luke Skywalker",
        //       "height": "172",
        //       "mass": "77",
        //       "hair_color": "blond",
        //       "skin_color": "fair",
        //       "eye_color": "blue",
        //       "birth_year": "19BBY",
        //       "gender": "male",
        //       "homeworld": 1,
        //       "films": [
        //         1,
        //         2,
        //         3,
        //         6
        //       ],
        //       "species": [],
        //       "vehicles": [
        //         14,
        //         30
        //       ],
        //       "starships": [
        //         12,
        //         22
        //       ],
        //       "created": "2014-12-09T13:50:51.644000Z",
        //       "edited": "2014-12-20T21:17:56.891000Z",
        //       "url": 1
        //     },
        //     {
        //       "name": "Luke Skywalker",
        //       "height": "172",
        //       "mass": "77",
        //       "hair_color": "blond",
        //       "skin_color": "fair",
        //       "eye_color": "blue",
        //       "birth_year": "19BBY",
        //       "gender": "male",
        //       "homeworld": 1,
        //       "films": [
        //         1,
        //         2,
        //         3,
        //         6
        //       ],
        //       "species": [],
        //       "vehicles": [
        //         14,
        //         30
        //       ],
        //       "starships": [
        //         12,
        //         22
        //       ],
        //       "created": "2014-12-09T13:50:51.644000Z",
        //       "edited": "2014-12-20T21:17:56.891000Z",
        //       "url": 1
        //     },
        //     {
        //       "name": "Luke Skywalker",
        //       "height": "172",
        //       "mass": "77",
        //       "hair_color": "blond",
        //       "skin_color": "fair",
        //       "eye_color": "blue",
        //       "birth_year": "19BBY",
        //       "gender": "male",
        //       "homeworld": 1,
        //       "films": [
        //         1,
        //         2,
        //         3,
        //         6
        //       ],
        //       "species": [],
        //       "vehicles": [
        //         14,
        //         30
        //       ],
        //       "starships": [
        //         12,
        //         22
        //       ],
        //       "created": "2014-12-09T13:50:51.644000Z",
        //       "edited": "2014-12-20T21:17:56.891000Z",
        //       "url": 1
        //     },
        //     {
        //       "name": "Luke Skywalker",
        //       "height": "172",
        //       "mass": "77",
        //       "hair_color": "blond",
        //       "skin_color": "fair",
        //       "eye_color": "blue",
        //       "birth_year": "19BBY",
        //       "gender": "male",
        //       "homeworld": 1,
        //       "films": [
        //         1,
        //         2,
        //         3,
        //         6
        //       ],
        //       "species": [],
        //       "vehicles": [
        //         14,
        //         30
        //       ],
        //       "starships": [
        //         12,
        //         22
        //       ],
        //       "created": "2014-12-09T13:50:51.644000Z",
        //       "edited": "2014-12-20T21:17:56.891000Z",
        //       "url": 1
        //     }
        //   ]
        // };


            const [starshipsData, charactersData, planetsData] = await Promise.all([
                axios.get(`${defaultUrl}/starships`),
                axios.get(`${defaultUrl}/people`),
                axios.get(`${defaultUrl}/planets`)
            ]);
            setStarShips(starshipsData.data);
            setCharacters(charactersData.data);
            setPlanets(planetsData.data);

            setStarShipsCount(starshipsData.data.count);
            setCharactersCount(charactersData.data.count);
            setPlanetsCount(planetsData.data.count);

            // setStarShips(starshipsOutput);
            // setCharacters(charactersOutput);
            // setPlanets(planetsOutput);
      
            // setStarShipsCount(starshipsOutput.count);
            // setCharactersCount(charactersOutput.count);
            // setPlanetsCount(planetsOutput.count);
          
        
        }
        try {
          swapiData();
        } catch (err) {
            setError(err.data.message);
          }
    }, [])

    return (
        <SwapiContext.Provider value={{ characters, planets, starships, charactersCount, planetsCount, starshipsCount, error }}>
            {props.children}
        </SwapiContext.Provider>
    )
}
export default SwapiContextProvider;
