import React from "react";
import CategoriesBlock from "./CategoriesBlock";

function Categories(params) {
    return (
        <>
            <h3 className="categories__title">Для кого выбираете?</h3>
            <div className="categories__wrapper">
                <CategoriesBlock items={params} />
            </div>
        </>
    );
}

export default Categories;
