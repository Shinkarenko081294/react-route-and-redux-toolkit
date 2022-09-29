import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <div>
            <h1>THISHOMEPAGE</h1>
            <h3>Get started with React-Router 6</h3>
            {/* <p>Проверка входа id USER ({id == null ? id : "no ID"})</p> */}
            <p>Ссылка на уроки <a href="https://www.youtube.com/c/%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB%D0%9D%D0%B5%D0%BF%D0%BE%D0%BC%D0%BD%D1%8F%D1%89%D0%B8%D0%B9">Тут</a> </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium est voluptate nostrum? Veritatis, deleniti eveniet minus necessitatibus eius sed veniam deserunt numquam quibusdam? Sequi totam numquam aliquam aut obcaecati ab.</p>
            <Link to="/">home</Link>
        </div>
    )
}
export {Homepage};