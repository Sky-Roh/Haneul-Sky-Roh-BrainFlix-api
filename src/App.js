import "./App.scss";
import Header from "./components/Header/Header"
import HomePage from "./pages/HomePage/HomePage"
import UploadPage from "./pages/Page/UploadPage"
import NotFoundPage from "./pages/Page/NotFoundPage"
import {BrowserRouter, Routes, Route} from "react-router-dom";


// we don't need state for header
function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/"
                    element={<HomePage/>}/>
                <Route path="/videos/:id"
                    element={<HomePage/>}/>
                <Route path="/videos"
                    element={<UploadPage/>}/>
                <Route path="*"
                    element={<NotFoundPage/>}/>

            </Routes>
        </BrowserRouter>
    );
}

export default App;


// <div className="App">
//     <Header/>
//     <Main />
// </div>
