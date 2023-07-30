import "./App.scss";
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"

// we don't need state for header
function App() {
    return (
        <div className="App">
            <Header/>
            <Main />
        </div>
    );
}

export default App;
