import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";


const fullstackProjects = [
  {
    title: "E-Commerce Platform (In Progress)",
    image: "/projects/ecomm.webp",
    github: "#",
    type: "Full Stack Product",
  },
  {
    title: "Stripe Payment Integration",
    image: "/projects/prf.png",
    github: "#",
    type: "Payment System",
  },
];

export default function FullstackProjects() {
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
        Full Stack <span className="text-orange-500">Products</span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {fullstackProjects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
