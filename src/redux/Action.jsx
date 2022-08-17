import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { SearchContext } from "../App";

const Action = () => {
    const [items, setItems] = useState([]);
    const { searchValue } = useContext(SearchContext);
    const [isLoading, setIsLoading] = useState(true);

    const search = searchValue ? `&search=${searchValue}` : "";

    useEffect(() => {
        axios
            .get(
                `https://62d40ad6cd960e45d4522b59.mockapi.io/QazaqRepublic?${search}`
            )
            .then((response) => {
                setItems(response.data);
                setIsLoading(false);
            });
        window.scrollTo(0, 0);
    }, [searchValue]);
    return items;
};

export default Action;
