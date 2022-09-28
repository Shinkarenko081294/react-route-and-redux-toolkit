import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h1>THISABAUTPAGE</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam atque doloribus illo saepe id maiores nemo eos iusto rem, praesentium excepturi at natus voluptatem modi quas quasi veniam ut cum.</p>
            This page doesn't exist. Go <Link to="/">home</Link>
        </div>
    )
}
export {About};