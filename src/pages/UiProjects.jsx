import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";


const uiProjects = [
  {
    title: "Image Slider",
    image: "/projects/Imgeslider.jpg",
    live: "https://iamfuzail.github.io/Image-slider/imageslider.html",
    github: "https://github.com/iamfuzail/Image-slider.git",
    type: "UI Component",
  },
  {
    title: "Popup System",
    image: "/projects/popup.png",
    github: "#",
    type: "Modal Interaction",
  },
  {
    title: "Twitter UI Clone",
    image: "/projects/twitter.jpg",
    live: "https://iamfuzail.github.io/Twitter-clone/",
    github: "https://github.com/iamfuzail/Tweets.git",
    type: "Interface Engineering",
  },
];

export default function UiProjects() {
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
        UI <span className="text-orange-500">Components</span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {uiProjects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
