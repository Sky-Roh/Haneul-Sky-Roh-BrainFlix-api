import "./App.scss";
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import UploadPage from "./pages/Page/UploadPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";


// we don't need state for header
function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/"
                    element={<Main/>}/>
                <Route path="/videos"
                    element={<UploadPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;


    // <div className="App">
    //     <Header/>
    //     <Main />
    // </div>