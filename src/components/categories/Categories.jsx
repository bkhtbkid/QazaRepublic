import React from "react";
import CategoriesBlock from "./CategoriesBlock";

function Categories() {
    return (
        <>
            <h3 className="categories__title">Для кого выбираете?</h3>
            <div className="categories__wrapper">
                <CategoriesBlock />
                <CategoriesBlock />
                <CategoriesBlock />
            </div>
        </>
    );
}

export default Categories;
