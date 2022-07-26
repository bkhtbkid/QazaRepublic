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
            <section className="trends-block">
                <TrendsBlock />
            </section>
        </div>
    );
}

export default App;
