import { Outlet } from "react-router-dom";


const LandingLayout = () => {
    return (
        <div>
            <header>
                Header
            </header>

            <Outlet />

            <footer>
                Footer
            </footer>
        </div>
    );
};

export default LandingLayout;