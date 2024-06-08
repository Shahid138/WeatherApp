import { useEffect, useState } from "react";
import { LOCATION_URL } from "../constants";

const key = import.meta.env.VITE_API_KEY;

const useLocation = () => {
    const [location, setLocation] = useState("delhi");

    const fetchData = async () => {
        try {
            const resource = LOCATION_URL + location + "&limit=3&appid=" + key;
            const data = await fetch(resource);
            const json = await data.json();
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData(); 
    }, [location]);

    return { location };
};

export default useLocation;
