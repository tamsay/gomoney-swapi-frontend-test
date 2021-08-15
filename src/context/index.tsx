import React, { useState, useEffect, createContext } from "react";
import { usePeople } from "../hooks/usePeople";
import { useFilms } from "../hooks/useFilms";
import {usePlanets} from "../hooks/usePlanets";
import { useSpecies } from "../hooks/useSpecies";
import { useStarships } from "../hooks/useStarships";
import { useVehicles } from "../hooks/useVehicles";

// const charData = usePeople()
export const PeopleContext = createContext(usePeople);
export const FilmsContext = createContext(useFilms);
export const PlanetsContext = createContext(usePlanets);
export const SpeciesContext = createContext(useSpecies);
export const VehiclesContext = createContext(useVehicles);
export const StarshipsContext = createContext(useStarships);
