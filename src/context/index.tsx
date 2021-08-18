// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { createContext, useEffect, useState, ReactNode } from "react";
import axios from "axios";

interface swapiContextInterface {
    starships: Record<string, any> | null;
    characters: Record<string, any> | null;
    planets: Record<string, any> | null;
  }
  interface Props {
    children: ReactNode;
  }
export const SwapiContext = createContext({} as swapiContextInterface);

const SwapiContextProvider = (props: Props) => {

  const [starships, setStarShips] = useState<null | Record<string, any>>(null);
  const [characters, setCharacters] = useState<null | Record<string, any>>(null);
  const [planets, setPlanets] = useState<null | Record<string, any>>(null);

    const defaultUrl = "https://swapi.dev/api/";

    useEffect(() => {
        const swapiData = async () => {
            const [starshipsData, charactersData, planetsData] = await Promise.all([
                axios.get(`${defaultUrl}/starships`),
                axios.get(`${defaultUrl}/people`),
                axios.get(`${defaultUrl}/planets`)
            ]);
            setStarShips(starshipsData.data);
            setCharacters(charactersData.data);
            setPlanets(planetsData.data);
        }
        swapiData();
    }, [])

    return (
        <SwapiContext.Provider value={{ characters, planets, starships }}>
            {props.children}
        </SwapiContext.Provider>
    )
}
export default SwapiContextProvider;
