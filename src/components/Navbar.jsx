import { Link } from "react-router-dom";

const Navbar = ({content}) =>{

    const pathname = window.location.pathname

    const isActive = (path) => {
        if (path === "/") return pathname === path ? "nav-active" : "nav-non"; // Kondisi khusus untuk elemen "Home", selalu mengembalikan "nav-non"
        return pathname.startsWith(path) ? "nav-active" : "nav-non";
    };
    return(
        <>
        <div className="header d-flex align-items-center fixed-top pt-3 ps-4">
            <p><i className="bi bi-list humberger fs-6" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling"
                    aria-controls="offcanvasScrolling"></i> <span>Welcome To My Page!</span></p>
            {/* {{-- <div className="btn-dark mode-toggle position-absolute">Home</i></div> --}} */}
        </div>
        <div className="footer fixed-bottom  d-flex align-items-center justify-content-center pt-3">
            <p>Copyright© 2023 Muhammad Yusuf</p>
        </div>

        <div className="offcanvas offcanvas-start" data-bs-scroll="false" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div className="offcanvas-header  sidebar2">
                <ul>
                    <li className={isActive('/')}><Link to="/"><i className="bi bi-house-door"></i> Home</Link></li>
                    <li className={isActive('/experiences')}><Link to="/experiences"><i className="bi bi-award"></i> Experiences</Link></li>
                    <li className={isActive('/projects')}><Link to="/projects"><i className="bi bi-code-slash"></i> Projects</Link></li>
                    <li className={isActive('/contact')}><Link to="/contact"><i className="bi bi-envelope"></i> Contacts</Link></li>
                    <hr />
                    <li className={isActive('/bot')}><Link to="/bot"><i className="bi bi-chat-quote"></i> ChatBot</Link></li>

                </ul>
            </div>
        </div>
        <div className="hero d-flex">
            <div className="sidebar fixed-top">
                <ul>
                    <li className={isActive('/')}><Link to="/"><i className="bi bi-house-door"></i> Home</Link></li>
                    <li className={isActive('/experiences')}><Link to="/experiences"><i className="bi bi-award"></i> Experiences</Link></li>
                    <li className={isActive('/projects')}><Link to="/projects"><i className="bi bi-code-slash"></i> Projects</Link></li>
                    <li className={isActive('/contact')}><Link to="/contact"><i className="bi bi-envelope"></i> Contacts</Link></li>
                    <hr />
                    <li className={isActive('/bot')}><Link to="/bot"><i className="bi bi-chat-quote"></i> ChatBot</Link></li>

                </ul>
            </div>
            <div className="main-content p-4">
                {/* Konten */}
                {content}


            </div>
        </div>
        </>
    )
}

export default Navbar