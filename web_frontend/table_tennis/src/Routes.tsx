import {
    Navigate,
    Route,
    Routes
}               from "react-router-dom";
import App      from "App";
import Main     from "pages/Main";
import Profile  from "pages/Profile";

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<App/>} >
            <Route path="" element={<Main/>} />
            <Route path="profile" element={<Profile/>} />
            <Route path="rank" />
            <Route path="*" element={<Navigate to="/"/>} />
        </Route>
    </Routes>
);

export default AppRoutes;
