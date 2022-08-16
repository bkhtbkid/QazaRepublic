import React from "react";
import { Link } from "react-router-dom";
import action from "../../redux/Action";

function CategoriesBlock() {
    const items = action();

    return (
        <>
            {items.map((value, index) => {
                return (
                    value.collection && (
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
                                    {value.collection}
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
