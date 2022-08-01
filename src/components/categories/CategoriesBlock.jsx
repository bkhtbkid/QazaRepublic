import React from "react";
import { Link } from "react-router-dom";
import items from "../../data.json";

function CategoriesBlock() {
    const gender = ["/male", "/female", "/kids"]; // Доделать здесь

    return (
        <>
            {items.map((value, index) => {
                return (
                    value.gender !== "" && (
                        <div
                            className="categories__item item-categories"
                            key={index}
                        >
                            <img src={value.imageUrl} alt="img" />
                            <div className="">
                                <Link
                                    to={"/male"}
                                    className="item-categories__link"
                                >
                                    {value.gender}
                                </Link>
                            </div>
                        </div>
                    )
                );
            })}
        </>
    );
}

export default CategoriesBlock;
