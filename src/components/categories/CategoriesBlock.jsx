import React from "react";
import { Link } from "react-router-dom";

function CategoriesBlock(params) {
    const gender = ["/male", "/female", "/kids"]; // Доделать здесь
    const items = params.items.items;

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
