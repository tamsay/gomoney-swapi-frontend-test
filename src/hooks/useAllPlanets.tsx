import { useState, useEffect } from "react";
import axios from "axios";

export const useAllPlanets = () => {
    const [allPlanets, setAllPlanets] = useState<Array<any>>([])
  
  useEffect(() => {
    let resultArray: string[] = [];
    const defaultUrl = "https://swapi.dev/api";
    let planetsCounter = 1 ;
    const getAllPlanets = async () => {
      let result = await axios.get(`${defaultUrl}/planets/?page=${planetsCounter}`)
      result.data.results.map((element:any) =>resultArray.push(element))
      
        if (result.data.next === null) {
          resultArray.push(result.data.results)
          setAllPlanets(resultArray);
        return;
      }
      planetsCounter++;
      getAllPlanets();
    }
        getAllPlanets();
  },[])
    
    return allPlanets;

  // return [{
  //   "name": "Tatooine",
  //   "rotation_period": "23",
  //   "orbital_period": "304",
  //   "diameter": "10465",
  //   "climate": "arid",
  //   "gravity": "1 standard",
  //   "terrain": "desert",
  //   "surface_water": "1",
  //   "population": "200000",
  //   "residents": [
  //     1,
  //     2,
  //     4,
  //     6,
  //     7,
  //     8,
  //     9,
  //     11,
  //     43,
  //     62
  //   ],
  //   "films": [
  //     1,
  //     3,
  //     4,
  //     5,
  //     6
  //   ],
  //   "created": "2014-12-09T13:50:49.641000Z",
  //   "edited": "2014-12-20T20:58:18.411000Z",
  //   "url": 1
  // },
  // {
  //   "name": "Tatooine",
  //   "rotation_period": "23",
  //   "orbital_period": "304",
  //   "diameter": "10465",
  //   "climate": "arid",
  //   "gravity": "1 standard",
  //   "terrain": "desert",
  //   "surface_water": "1",
  //   "population": "200000",
  //   "residents": [
  //     1,
  //     2,
  //     4,
  //     6,
  //     7,
  //     8,
  //     9,
  //     11,
  //     43,
  //     62
  //   ],
  //   "films": [
  //     1,
  //     3,
  //     4,
  //     5,
  //     6
  //   ],
  //   "created": "2014-12-09T13:50:49.641000Z",
  //   "edited": "2014-12-20T20:58:18.411000Z",
  //   "url": 1
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
  //   }
  // ]
};
