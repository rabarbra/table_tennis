import { Outlet }           from 'react-router-dom';
import Container            from '@mui/material/Container';
import TopBar               from 'components/TopBar';
import AppTheme             from 'theme/AppTheme';
import { TOPBAR_HEIGHT }    from 'config/config';


function App() {
    return (
        <AppTheme>
            <TopBar/>
            <Container
                maxWidth='xl'
                sx={{
                    height: `calc(100vh - ${TOPBAR_HEIGHT}px)`
                }}
            >
                <Outlet/>
            </Container>
        </AppTheme>
    );
};

export default App;
