import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Maintenance from "./Maintenance/Maintenance";

const Router = ({ status = 0, children }) => {

    return (
        <BrowserRouter>
            <Routes>
                {
                status === 0
                ? <Route path="/" element={<Maintenance />} />
                : <Route path="/" element={<Home />} />
                }
            </Routes>
        </BrowserRouter>
    );
}

export default Router;