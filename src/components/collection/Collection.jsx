import React from "react";
import { Link } from "react-router-dom";

function Collection() {
    return (
        <div className="collectionBlock">
            <div className="container">
                <div className="collection__item item-collection">
                    <h2 className="item-collection__title">
                        Получи <span>новую коллекцию</span> этого сезона
                    </h2>
                    <Link to={"/latest"}>
                        <button className="item-collection__button button">
                            Посмотреть новинки
                            <svg
                                version="1.1"
                                id="Capa_1"
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="50px"
                                height="22px"
                                viewBox="0 0 611.983 611.983"
                                className="buttonIcon"
                                style={{
                                    position: "absolute",
                                    right: "-5px",
                                    top: "8px",
                                }}
                                fill="#fff"
                            >
                                <path
                                    d="M423.942,340.085H0v33.805h423.942V340.085z M588.02,282.096L588.02,282.096L424.248,118.902l-23.981,23.896
				l163.755,163.193L400.267,469.185l23.981,23.896l187.735-187.106L588.02,282.096z M423.942,255.106H0v33.804h423.942V255.106z"
                                />
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Collection;
