import React, { Suspense } from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { Home } from './Pages/Home';
import { Logo } from './components/Logo';
import { Detail } from './Pages/Detail';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
// import { Favs } from './Pages/Favs';
import { User } from './Pages/User';
import { NotRegisteredUser } from './Pages/NotRegisteredUser';
import { AppContext } from './Context';
import { NotFound } from './Pages/NotFound';

const Favs = React.lazy(() => import('./Pages/Favs'));

export const App = () => {

    const { user: { isAuth } } = React.useContext(AppContext);


    return (
        <Suspense fallback={<div />}>
            <BrowserRouter>
                <GlobalStyle />
                <Logo />
                <Routes>

                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={!isAuth ? <NotRegisteredUser /> : <Navigate replace to='/' />} />
                    <Route path='/pet/:id' element={<Home />} />
                    <Route path='/detail/:id' element={<Detail />} />
                    <Route path='/favs' element={isAuth ? <Favs /> : <Navigate replace to='/login' />} />
                    <Route path='/user' element={isAuth ? <User /> : <Navigate replace to='/login' />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <Navbar />
            </BrowserRouter>
        </Suspense>

    )
}