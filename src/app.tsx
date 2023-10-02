// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/users/Login';
import SignUp from './pages/users/SignUp';
import CompanyInfo from './components/pages/UserSetting';
import NewInfo from './pages/add/addinfo/AddNewInfo';
import EditArea from './pages/edit/EditArea';
import LandingPage from './pages';
import LogOut from './pages/users/Logout';
import NewReport from './pages/add/AddReport';
import ListReportByRoles from './pages/list/listReports/ListReportsPage';
import EditVineyard from './pages/edit/EditVineyard';
import ListVineyardByRoles from './pages/list/listVineyards';
import ListAreas from './pages/list/listAreas/ListAreas';
import Header from './components/pages/components/header';
import { Theme } from './components/pages/components/Theme';

const App: React.FC = () => {
    const savedThemeState = JSON.parse(localStorage.getItem('themeState') || '{}');

    return (
        <Theme data={savedThemeState}>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />

                    <Route path="/users/login" element={<Login />} />
                    <Route path="/users/logout" element={<LogOut />} />
                    <Route path="/users/signup" element={<SignUp />} />
                    <Route path="/users/areas" element={<ListAreas />} />
                    <Route path="/users/info" element={<CompanyInfo />} />

                    <Route path="/users/new" element={<NewInfo />} />
                    <Route path="/add/newReport" element={<NewReport />} />
                    <Route path="/users/ListReports" element={<ListReportByRoles />} />
                    <Route path="/role/edit/vineyard" element={<EditVineyard />} />
                    <Route path="/role/edit/area" element={<EditArea />} />
                    <Route path="/role/list/vineyard" element={<ListVineyardByRoles />} />
                </Routes>
            </BrowserRouter>
        </Theme>
    );
};

export default App;
