import { Link } from "react-router-dom";

function Login(){
    return(
        <div>
            <h2> Login component </h2>
            <Link to="/signup"> Sign Up </Link> <br /> <br />
            <Link to="/home"> Home </Link>
        </div>
    )
}

export default Login;