import {
    Navigate,
    Route,
    Routes
}           from "react-router-dom";
import App  from "App";
import Main from "pages/Main";

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<App/>} >
            <Route path="" element={<Main/>} />
            <Route path="rank" />
            <Route path="*" element={<Navigate to="/"/>} />
        </Route>
    </Routes>
);

export default AppRoutes;
