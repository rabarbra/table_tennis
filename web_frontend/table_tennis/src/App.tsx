import { Outlet }       from 'react-router-dom';
import AppTheme         from 'theme/AppTheme';
import 'App.css';


function App() {
    return (
        <AppTheme>
            <Outlet/>
        </AppTheme>
    );
};

export default App;
