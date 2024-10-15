
import {createBrowserRouter} from "react-router-dom";
import LogIn from "./components/LogIn";
import App from "./App";
import SignUp from "./components/SignUp";


const MyRouter = createBrowserRouter([
    {
        path: "/v2",
        element: <App />,
    },
    {
        path: "/v2/login",
        element: <LogIn />
    },
    {
        path: "/v2/signup",
        element: <SignUp/>
    }
]);

export default MyRouter