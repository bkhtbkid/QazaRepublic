import React from "react";
import Boxes from "../../components/boxes/Boxes";
import Categories from "../../components/categories/Categories";
import Collection from "../../components/collection/Collection";
import Header from "../../components/header/Header";
import TrendsBlock from "../../components/trendsBlock/TrendsBlock";
import Footer from "../../components/footer/Footer";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function Home() {
    const [items, setItems] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);

    // Сделать получение данных с сервера

    useEffect(() => {
        axios
            .get("https://62d40ad6cd960e45d4522b59.mockapi.io/QazaqRepublic")
            .then((response) => {
                setItems(response.data);
                // setIsLoading(false);
            });
    }, []);

    return (
        <div className="App">
            <Header />
            <section className="collection">
                <Collection />
            </section>
            <div className="container">
                <section className="trends-block">
                    <TrendsBlock items={items} />
                </section>
                <section className="categories">
                    <Categories items={items} />
                </section>
                <section className="boxes">
                    <Boxes items={items} />
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default Home;

// худи
// костюмы
// аксессуары - кепка - бутылки - кружки - панама - стикерпак
// сувениры - гифтбокс
// футболки
// сумки - шоппер
// рюкзаки
// шорты
// брюки
// 100% qr look
// longsleeve
// ТОП - бомпер - куртка
// рубашки
// combo
// giftcard

// GENDER
// kids
// female
// male
