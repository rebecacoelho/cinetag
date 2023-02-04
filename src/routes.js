import BasePage from "pages/BasePage";
import Favorites from "pages/Favorites";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Player from "pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BasePage />}>
                    <Route index element={<Home />}></Route>
                    <Route path="favorites" element={<Favorites />}></Route>
                    <Route path=":id" element={<Player />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;