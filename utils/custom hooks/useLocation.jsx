import { useState, useEffect } from "react";
import { LOCATION_URL } from "../constants";

const key = import.meta.env.VITE_API_KEY;

const useLocation = () => {
    const [options, setOptions] = useState([]);

    const fetchLocation = async (location) => {
        if (!location) return;

        try {
            const resource = `${LOCATION_URL}${location}&limit=3&appid=${key}`;
            const data = await fetch(resource);
            const json = await data.json();
            setOptions(json);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return { options, fetchLocation };
};

export default useLocation;
