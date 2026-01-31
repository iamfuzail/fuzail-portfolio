import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";


const backendProjects = [
  {
    title: "MongoDB Connection",
    image: "/projects/mongoconn.png",
    github: "https://github.com/iamfuzail/MongoDB-Connection.git",
    type: "Database Integration",
  },
  {
    title: "MySQL Connection",
    image: "/projects/mysqlconn.jpg",
    github: "https://github.com/iamfuzail/MySQL-connection.git",
    type: "Relational DB Setup",
  },
  {
    title: "Passport Authentication",
    image: "/projects/passauth.jpg",
    github: "#",
    type: "Auth System",
  },
];

export default function BackendProjects() {
  return (
    <section className="px-5 md:px-20 py-20">
        <Breadcrumb />
        <Link
  to="/#portfolio"
  className="inline-block mb-10 text-orange-400 hover:text-orange-500 transition"
>
  ← Back to Portfolio
</Link>

      <h2 className="text-4xl font-bold mb-12">
        Backend <span className="text-orange-500">Systems</span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {backendProjects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
