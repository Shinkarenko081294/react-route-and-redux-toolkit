import { Link } from 'react-router-dom'

const Blogpage = () => {
    return (
        <div>
            THIS BLOGPAGE
            This page doesn't exist. Go <a href="/">home</a>
            This page doesn't exist. Go <Link to="/">home</Link>
        </div>
    )
}
export {Blogpage};