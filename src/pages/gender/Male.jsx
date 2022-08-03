import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import action from "../../redux/Action";
import PagesSkeleton from "../../components/skeleton/PagesSkeleton";

function Male() {
    const items = action().data;

    return (
        <>
            <Header />
            <section className="male">
                <div className="container">
                    <h1 className="male__title pages-title">Мужчины</h1>
                    <ul className="male__list list-male">
                        {items !== undefined ? (
                            items.map((obj, index) => {
                                const it = obj.category.filter(
                                    (item) => item === "male"
                                );
                                return (
                                    it.length > 0 && (
                                        <li
                                            className="list-male__item item-list"
                                            key={index}
                                        >
                                            <img
                                                src={obj.imageUrl}
                                                alt=""
                                                className="item-list__image item-image"
                                            />
                                            <div className="item-list__wrapper">
                                                <h3 className="item-list__title">
                                                    {obj.title}
                                                </h3>
                                                <div className="item-list__price">
                                                    {obj.price} тг.
                                                </div>
                                                <button className="item-list__button button">
                                                    Купить
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
                                                            position:
                                                                "absolute",
                                                            right: "5px",
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
                                            </div>
                                        </li>
                                    )
                                );
                            })
                        ) : (
                            <PagesSkeleton />
                        )}
                    </ul>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Male;
