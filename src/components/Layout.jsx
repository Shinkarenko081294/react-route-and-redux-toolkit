import { Outlet } from 'react-router-dom';
import styleLayout from './Layout.module.css';
import { CustomLink } from './CustomLink/CustomLink';

const Layout = () =>{
    return(
        <>
        <header>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/posts">Blog</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/create">PrivatPage</CustomLink>
            <CustomLink to="/userPage">Users</CustomLink>
        </header>
        <main className={styleLayout.container}>
            <Outlet />
        </main>
        <footer className={styleLayout.footer}>Shinkar94 - 2022г</footer>
        </>
    )
}

export {Layout}