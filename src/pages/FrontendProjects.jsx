import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";


const frontendProjects = [
  {
    title: "Calculator",
    image: "/projects/calc.webp",
    live: "https://iamfuzail.github.io/Calculator/",
    github: "https://github.com/iamfuzail/Calculator.git",
    type: "Frontend Logic",
  },
  {
    title: "Weight Converter",
    image: "/projects/weightconverter.jpg",
    live: "https://iamfuzail.github.io/Weight-converter/",
    github: "https://github.com/iamfuzail/Weight-converter.git",
    type: "Utility Tool",
  },
  {
    title: "Form Validation",
    image: "/projects/formvalid.jpg",
    live: "https://iamfuzail.github.io/Form-Validation/",
    github: "https://github.com/iamfuzail/Form-Validation.git",
    type: "User Input Handling",
  },
  {
    title: "Copy To Clipboard",
    image: "/projects/copytoclip.webp",
    live: "https://iamfuzail.github.io/Copy-to-clipboard/",
    github: "https://github.com/iamfuzail/Copy-to-clipboard.git",
    type: "Browser Utility",
  },
];

export default function FrontendProjects() {
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
        Frontend <span className="text-orange-500">Projects</span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {frontendProjects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
