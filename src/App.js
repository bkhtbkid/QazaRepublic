import Boxes from "./components/boxes/Boxes";
import Categories from "./components/categories/Categories";
import Collection from "./components/collection/Collection";
import Header from "./components/header/Header";
import "./components/scss/app.scss";
import TrendsBlock from "./components/trendsBlock/TrendsBlock";

function App() {
    return (
        <div className="App">
            <Header />
            <section className="collection">
                <Collection />
            </section>
            <div className="container">
                <section className="trends-block">
                    <TrendsBlock />
                </section>
                <section className="categories">
                    <Categories />
                </section>
                <section className="boxes">
                    <Boxes />
                </section>
            </div>
        </div>
    );
}

export default App;
