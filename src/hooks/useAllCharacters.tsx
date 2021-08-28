import { useState, useEffect } from "react";
import axios from "axios";

export const useAllCharacters = () => {
    const [allCharacters, setAllCharacters] = useState<Array<any>>([])
  
  useEffect(() => {
    let resultArray: string[] = [];
    const defaultUrl = "https://swapi.dev/api";
    let charactersCounter = 1 ;
    const getAllCharacters = async () => {
      let result = await axios.get(`${defaultUrl}/people/?page=${charactersCounter}`)
      result.data.results.map((element:any) =>resultArray.push(element))
      
        if (result.data.next === null) {
          resultArray.push(result.data.results)
          setAllCharacters(resultArray);
        return;
      }
      charactersCounter++;
      getAllCharacters();
    }
        getAllCharacters();
  },[])
  
    return allCharacters;

  // let results = [{
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
  //   ];
    
  // return results;
  };
