import Link from "next/link";
import Layout from "../components/Layout";

const custom404 = () => (
  <Layout title="Page Not Found">
    <div className="text-center">
      <h1 className="display-1">404</h1>
      <p>
        Esta pagina no existe. Por favor regresa a {" "}
        <Link legacyBehavior href="/">
          <a>Pagina principal</a>
        </Link>
      </p>
    </div>
  </Layout>
);

export default custom404;
