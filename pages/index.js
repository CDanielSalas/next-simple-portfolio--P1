import Layout from "../components/Layout";
import Link from "next/link";
import Carrusel from  "../components/carrusel";
import { skills, experiences, projects } from "../profile";

const Index = () => (
  <Layout>
    
    {/* Header Card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn">
          <div className="row">
            <div className="col-md-3">
              <img src="/yo.jpeg"  width = "500" height="100" alt="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>Daniel Salas</h1>
              <h3>Full Stack Developer</h3>
              <p>
                Mi Nombre es Carlos Daniel Salas estudiante de ingenieria en sistemas de la informacion, actualmente soy estudiante de la Universidad Nacional de Costa Rica, me desarrollo como Full Stack, conocimineto en lenguajes como Phyton, C++, Java, JavaScript, Typescript y entre otros
              </p>
              <Link legacyBehavior href="/hireme">
                <a className="btn btn-outline-light">Contratame</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Second section */}

    <section className="row">
      <div className="col-md-4 py-2">
        <div className="card bg-light animate__animated animate__fadeInLeft">
          <div className="card-body">
            <h1>Habilidades</h1>

            {/* Skill Progress  */}
            {skills.map(({ skill, percentage }, i) => (
              <div className="py-3" key={i}>
                <h5>{skill}</h5>
                <div className="progress ">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="col-md-8 py-2">
        {/* Experience */}
        <div className="card bg-light animate__animated animate__fadeInRight">
          <div className="card-body">
            <h1>Educacion</h1>

            <ul>
              {/* List Item Experience */}
              {experiences.map(({ title, from, to, description }, index) => (
                <li key={index}>
                  <h3>{title}</h3>
                  <h5>
                    {from} {to ? `- ${to}` : "- current"}
                  </h5>
                  <p>
                   {description}
                  </p>
                </li>
              ))}
            </ul>
            <Link legacyBehavior href="/hireme">
              <a className="btn btn-light">Conoce más</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
    < Carrusel/>
    {/* Porfolio */}
    <section>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12 my-2">
                <h1 className="text-center text-light">Conocimiento</h1>
              </div>
              {projects.map(({ name, description, image }, index) => (
                <div className="col-md-4 p-2" key={index}>
                  <div className="card h-100">
                    <div className="overflow">
                      <img
                        src={`/${image}`}
                        alt=""
                        className="card-img-top"
                      />
                    </div>
                    <div className="card-body">
                      <h3>{name}</h3>
                      <p>{description}</p>
                      <a href="#!">más</a>
                    </div>
                  </div>
                </div>
              ))}

              <div className="col-md-12 mt-4">
                <div className="text-center">
                  <Link legacyBehavior href="/portfolio">
                    <a className="btn btn-outline-light">Mas proyectos</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
