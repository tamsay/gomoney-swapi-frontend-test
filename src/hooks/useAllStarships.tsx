import { useState, useEffect } from "react";
import axios from "axios";

export const useAllStarships = () => {
    const [allStarships, setAllStarships] = useState<Array<any>>([])
  
  useEffect(() => {
    let resultArray: string[] = [];
    const defaultUrl = "https://swapi.dev/api";
    let starshipsCounter = 1 ;
    const getAllStarships = async () => {
      let result = await axios.get(`${defaultUrl}/starships/?page=${starshipsCounter}`)
      result.data.results.map((element:any) =>resultArray.push(element))
      
        if (result.data.next === null) {
          resultArray.push(result.data.results)
          setAllStarships(resultArray);
        return;
      }
      starshipsCounter++;
      getAllStarships();
    }
        getAllStarships();
  },[])
    
    return allStarships;

  // return [{
  //   "name": "CR90 corvette",
  //   "model": "CR90 corvette",
  //   "manufacturer": "Corellian Engineering Corporation",
  //   "cost_in_credits": "3500000",
  //   "length": "150",
  //   "max_atmosphering_speed": "950",
  //   "crew": "30-165",
  //   "passengers": "600",
  //   "cargo_capacity": "3000000",
  //   "consumables": "1 year",
  //   "hyperdrive_rating": "2.0",
  //   "MGLT": "60",
  //   "starship_class": "corvette",
  //   "pilots": [],
  //   "films": [
  //     1,
  //     3,
  //     6
  //   ],
  //   "created": "2014-12-10T14:20:33.369000Z",
  //   "edited": "2014-12-20T21:23:49.867000Z",
  //   "url": 2
  // },
  // {
  //   "name": "CR90 corvette",
  //   "model": "CR90 corvette",
  //   "manufacturer": "Corellian Engineering Corporation",
  //   "cost_in_credits": "3500000",
  //   "length": "150",
  //   "max_atmosphering_speed": "950",
  //   "crew": "30-165",
  //   "passengers": "600",
  //   "cargo_capacity": "3000000",
  //   "consumables": "1 year",
  //   "hyperdrive_rating": "2.0",
  //   "MGLT": "60",
  //   "starship_class": "corvette",
  //   "pilots": [],
  //   "films": [
  //     1,
  //     3,
  //     6
  //   ],
  //   "created": "2014-12-10T14:20:33.369000Z",
  //   "edited": "2014-12-20T21:23:49.867000Z",
  //   "url": 2
  // },
  // {
  //   "name": "CR90 corvette",
  //   "model": "CR90 corvette",
  //   "manufacturer": "Corellian Engineering Corporation",
  //   "cost_in_credits": "3500000",
  //   "length": "150",
  //   "max_atmosphering_speed": "950",
  //   "crew": "30-165",
  //   "passengers": "600",
  //   "cargo_capacity": "3000000",
  //   "consumables": "1 year",
  //   "hyperdrive_rating": "2.0",
  //   "MGLT": "60",
  //   "starship_class": "corvette",
  //   "pilots": [],
  //   "films": [
  //     1,
  //     3,
  //     6
  //   ],
  //   "created": "2014-12-10T14:20:33.369000Z",
  //   "edited": "2014-12-20T21:23:49.867000Z",
  //   "url": 2
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
  //   }
  // ]
};
