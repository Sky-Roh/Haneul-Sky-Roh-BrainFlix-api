import "./App.scss";
import Header from "./components/Header/Header"
import HomePage from "./pages/HomePage/HomePage"
import UploadPage from "./pages/UploadPage/UploadPage"
import SignedUp from "./components/SignedUp/SignedUp";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import {BrowserRouter, Routes, Route} from "react-router-dom";

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
                <Route path="/signup"
                    element={<SignedUp/>}/>
                <Route path="*"
                    element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;