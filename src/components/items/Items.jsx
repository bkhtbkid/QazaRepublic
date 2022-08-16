import React from "react";
import { Link } from "react-router-dom";

const Items = ({ obj }) => {
    return (
        <li className="list-latest__item item-list">
            <Link to={`${obj.id}`}>
                <img
                    src={obj.imageUrl}
                    alt=""
                    className="item-list__image item-image"
                />
            </Link>
            <div className="item-list__wrapper">
                <Link to={`${obj.id}`}>
                    <h3 className="item-list__title">{obj.title}</h3>
                </Link>
                <div className="item-list__price">{obj.price} тг.</div>
                <Link to={`${obj.id}`}>
                    <button className="item-list__button button button--width">
                        Перейти к товару
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
                                right: "0px",
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
        </li>
    );
};

export default Items;
