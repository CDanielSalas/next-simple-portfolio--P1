import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link legacyBehavior href="/">
          <a className="navbar-brand">Mi portalofolio</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link legacyBehavior href="/blog">
                <a className="nav-link active" aria-current="page">
                  Tutoriales
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link legacyBehavior href="/github">
                <a className="nav-link">
                 Github 
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link legacyBehavior href="https://www.linkedin.com/in/daniel-salas-guido-b3bab8277/">
                <a className="nav-link">
                 Linkedin 
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
