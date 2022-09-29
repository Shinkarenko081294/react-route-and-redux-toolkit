import { Routes, Route, Navigate } from 'react-router-dom';

import styleApp from './App.module.css'

import { Homepage } from './pages/Homepage';
import { About } from './pages/Aboutpage';
import { Blogpage } from './pages/Blogpage';
import { Notfoundpage } from './pages/Notfoundpage';
import { Layout } from './components/Layout';
import {Singelpage} from './pages/Singelpage';
import { Createpost } from './pages/Createpost';
import { Loginpage } from './pages/LoginPage';
import { RequireAuth } from './components/hoc/RequireAuth';
import { AuthProvider } from './components/hoc/AuthProvider';
import { UserPages } from './pages/UserPages';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          {/* выполнение переадресации если перейти по адресной строке на about-as то нас перенаправит на about(replace для того что бы не запоминать точку входа about-as) */}
          <Route path="about-us" element={<Navigate to={'/about'} replace/>} />
          <Route path="posts" element={<Blogpage />} />
          <Route path="posts/:id" element={<Singelpage />} />
          <Route path="auth" element={<Loginpage />} />
          <Route path="userPage" element={<UserPages />} />
          <Route path="create" element={
              <RequireAuth>
                <Createpost />
              </RequireAuth>
            } 
          />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
