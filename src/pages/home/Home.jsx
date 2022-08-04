import React from "react";
import Boxes from "../../components/boxes/Boxes";
import Categories from "../../components/categories/Categories";
import Collection from "../../components/collection/Collection";
import TrendsBlock from "../../components/trendsBlock/TrendsBlock";
import action from "../../redux/Action";

function Home() {
    const items = action().data;

    return (
        <>
            {items && (
                <div className="App">
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
                </div>
            )}
        </>
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
