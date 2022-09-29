import { Link } from 'react-router-dom';
import * as axios from 'axios';


const UserPages = (props) =>{
    let test = "roman";
      
    return(
        <div>
            <p>This page Users {test}</p>
            {
                <Link to={'/profile/' + 2112}>
                   roman
                </Link>
            }
        </div>
    )
}

export {UserPages};