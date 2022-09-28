import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <div>
            THISHOMEPAGE
            This page doesn't exist. Go <a href="/">home</a>
            This page doesn't exist. Go <Link to="/">home</Link>
        </div>
    )
}
export {Homepage};