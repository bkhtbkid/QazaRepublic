import React, { useContext } from "react";
import { SearchContext } from "../../App";
import { useLocation } from "react-router-dom";

function Search() {
    const location = useLocation();
    const { searchValue, setSearchValue } = useContext(SearchContext);

    return (
        <div className="search">
            {location.pathname !== "" ||
                (location.pathname !== "/cart" && (
                    <svg
                        className="menu__search-icon"
                        viewBox="0 0 64 64"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M39.94,44.142c-3.387,2.507 7.145,-8.263 4.148,-4.169c0.075,-0.006 -0.064,0.221 -0.53,0.79c0,0 8.004,7.95 11.933,11.996c1.364,1.475 -1.097,4.419 -2.769,2.882c-3.558,-3.452 -11.977,-12.031 -11.99,-12.045l-0.792,0.546Z" />
                        <path d="M28.179,48.162c5.15,-0.05 10.248,-2.183 13.914,-5.806c4.354,-4.303 6.596,-10.669 5.814,-16.747c-1.34,-10.415 -9.902,-17.483 -19.856,-17.483c-7.563,0 -14.913,4.731 -18.137,11.591c-2.468,5.252 -2.473,11.593 0,16.854c3.201,6.812 10.431,11.518 18.008,11.591c0.086,0 0.172,0 0.257,0Zm-0.236,-3.337c-7.691,-0.074 -14.867,-6.022 -16.294,-13.648c-1.006,-5.376 0.893,-11.194 4.849,-15.012c4.618,-4.459 11.877,-5.952 17.913,-3.425c5.4,2.261 9.442,7.511 10.187,13.295c0.638,4.958 -1.141,10.154 -4.637,13.733c-3.067,3.14 -7.368,5.014 -11.803,5.057c-0.072,0 -0.143,0 -0.215,0Z" />
                    </svg>
                ))}
            {location.pathname !== "/" && (
                <input
                    type="text"
                    className="menu__search"
                    placeholder="Поиск"
                    onChange={(event) => setSearchValue(event.target.value)}
                    value={searchValue}
                />
            )}
            {searchValue && (
                <svg
                    viewBox="0 0 32 32"
                    className="deleteSearch"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => setSearchValue("")}
                >
                    <path d="M4,29a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l24-24a1,1,0,1,1,1.42,1.42l-24,24A1,1,0,0,1,4,29Z" />
                    <path d="M28,29a1,1,0,0,1-.71-.29l-24-24A1,1,0,0,1,4.71,3.29l24,24a1,1,0,0,1,0,1.42A1,1,0,0,1,28,29Z" />
                </svg>
            )}
        </div>
    );
}

export default Search;
