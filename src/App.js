import "./components/scss/app.scss";
import Boxes from "./components/boxes/Boxes";
import Categories from "./components/categories/Categories";
import Collection from "./components/collection/Collection";
import Header from "./components/header/Header";
import TrendsBlock from "./components/trendsBlock/TrendsBlock";
import Footer from "./components/footer/Footer";

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
            <Footer />
        </div>
    );
}

export default App;
