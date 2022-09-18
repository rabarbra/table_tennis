import { Outlet }       from 'react-router-dom';
import TopBar           from 'components/TopBar';
import AppTheme         from 'theme/AppTheme';


function App() {
    return (
        <AppTheme>
            <TopBar/>
            <Outlet/>
        </AppTheme>
    );
};

export default App;
