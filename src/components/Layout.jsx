import { Link, Outlet } from 'react-router-dom';
import styleLayout from './Layout.module.css';

const Layout = () =>{
    return(
        <>
        <header>
            <Link to="/">Home</Link>
            <Link to="/posts">Blog</Link>
            <Link to="/about">About</Link>
        </header>
        <main className={styleLayout.container}>
            <Outlet />
        </main>
        <footer className={styleLayout.footer}>Shinkar94 - 2022г</footer>
        </>
    )
}

export {Layout}