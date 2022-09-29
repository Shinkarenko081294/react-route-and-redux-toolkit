import {useLocation, useNavigate} from 'react-router-dom';
import { useAuth } from '../components/hook/useAuth';

const Loginpage = (props) =>{
    const naigate = useNavigate();
    const location = useLocation();
    const {sigin} = useAuth();

    const fromPage = location.state?.from?.pathname || '/';

    const handleSubmit = (e) => {
        e.preventDefault();
        const from = e.target;
        const user = from.username.value;

        sigin(user, () => naigate(fromPage, {replace: true}))
    }
    return (
        <div>
            <h1>LoginPage</h1>
            <p>`Адрес по которому вы хотели попасть - {fromPage}</p>
            <p>Но это приватная страница и вы не авторизованы - АВТОРИЗУЙТЕСЬ!</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input name="username" />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export {Loginpage};