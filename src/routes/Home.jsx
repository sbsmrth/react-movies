import { Header } from '../components/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return <>
        <Header />
        <Outlet />
    </>
}

export { Home };
