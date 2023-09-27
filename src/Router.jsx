import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Index.jsx";
import Login from "./pages/auth/login/Index.jsx";
import Register from "./pages/auth/register/Index.jsx";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
