import { Outlet, Link } from "react-router-dom";
import Play from "../components/Play";


const logo =  require("../assets/img/logo.png")

function AppLayout() {
    return ( 
        <div className="app-layout">
            <aside>
             <div className="side-nav">
                <img className="logo" src={logo} width={70} alt="logo" />
                <ul>
                    <Link to={`king`}><li>Home</li></Link>
                    <Link to={`king`}><li>Search</li></Link>
                    <Link to={`king`}><li>Your library</li></Link>
                </ul>
                <div className="border-slate"></div>
                <ul>
                    <Link to={`king`}><li>Create Collection</li></Link>
                    <Link to={`king`}><li>Linked Track</li></Link>
                </ul>
             </div>
            </aside>
            <section className="content">
                <Outlet />
            </section>
            <Play/>
        </div>
     );
}

export default AppLayout;