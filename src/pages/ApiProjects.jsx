import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";



const apiProjects = [
  {
    title: "Pokemon Website",
    image: "/projects/pokemon.jpg",
    live: "https://iamfuzail.github.io/Pokemon-Website/",
    github: "https://github.com/iamfuzail/Pokemon-Website.git",
    type: "API + Frontend",
  },
  {
    title: "Movie API",
    image: "/projects/movieapi.webp",
    live: "https://iamfuzail.github.io/Movie-API/",
    github: "https://github.com/iamfuzail/Movie-API.git",
    type: "API Integration",
  },
  {
    title: "Cricket API",
    image: "/projects/cric.webp",
    live: "https://iamfuzail.github.io/Cricket-API/",
    github: "https://github.com/iamfuzail/Cricket-API.git",
    type: "Sports API",
  },
];

export default function ApiProjects() {
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
        API <span className="text-orange-500">Projects</span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {apiProjects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
