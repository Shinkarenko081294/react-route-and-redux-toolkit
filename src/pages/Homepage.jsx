import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <div>
            <h1>THISHOMEPAGE</h1>
            <h3>Асинхронная работа с Redux Toolkit и createAsyncThunk time 20:20</h3>
            {/* <p>Проверка входа id USER ({id == null ? id : "no ID"})</p> */}
            <p>Ссылка на уроки <a href="https://www.youtube.com/c/%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB%D0%9D%D0%B5%D0%BF%D0%BE%D0%BC%D0%BD%D1%8F%D1%89%D0%B8%D0%B9">Тут</a> </p>
            <h3>Разбор тем:</h3>
            <p>1. react-router-dom v6</p>
            <p>2. redux toolkit</p>
            <h3>Материалы для практики:</h3>
            <p>1.Видео урок <a href="https://www.youtube.com/c/%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB%D0%9D%D0%B5%D0%BF%D0%BE%D0%BC%D0%BD%D1%8F%D1%89%D0%B8%D0%B9">Переход</a></p>
            <p>1.JSON placeholder <a href="https://www.youtube.com/c/%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB%D0%9D%D0%B5%D0%BF%D0%BE%D0%BC%D0%BD%D1%8F%D1%89%D0%B8%D0%B9">Переход</a></p>
            <Link to="/">home</Link>
        </div>
    )
}
export {Homepage};