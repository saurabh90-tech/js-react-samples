
import { Link } from "react-router-dom";

function Home(){
    return(
        <div>
            <h2> Home component </h2>
            <Link to="/login"> Logout </Link>
        </div>
    )
}

export default Home;