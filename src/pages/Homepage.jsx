import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <div>
            <h1>THISHOMEPAGE</h1>
            <h3>Get started with React-Router 6</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium est voluptate nostrum? Veritatis, deleniti eveniet minus necessitatibus eius sed veniam deserunt numquam quibusdam? Sequi totam numquam aliquam aut obcaecati ab.</p>
            <Link to="/">home</Link>
        </div>
    )
}
export {Homepage};