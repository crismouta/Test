import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom"
import AuthService from "../services/Auth.service";

const Layout = () => {
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
        }
    }, []);

    const logOut = () => {
        AuthService.logout();
    };

    return (
        <>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="navbar-nav mr-auto">
                    
                    {currentUser && (
                        <li className="nav-item">
                            <Link to={"/myImages"} className="nav-link">
                                MyImages
                            </Link>
                        </li>
                    )}
                </div>

                {currentUser ? (
                    <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link">
                                {currentUser.username}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a href="/login" className="nav-link" onClick={logOut}>
                                LogOut
                            </a>
                        </li>
                    </div>
                ) : (
                        <li className="nav-item">
                            <Link to={"/login"} className="nav-link">
                                Login
                            </Link>
                        </li>
                )}
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    )

}

export default Layout