export default function ProjectCard({ image, title, type, live, github }) {
  return (
    <div className="group rounded-2xl overflow-hidden border border-gray-800 hover:border-orange-500/60 transition">

      <img
        src={image}
        className="w-full h-56 object-cover group-hover:scale-110 transition duration-700"
      />

      <div className="p-5">
        <h3 className="text-xl font-semibold mb-1">{title}</h3>

        {type && (
          <span className="text-orange-400 text-sm">{type}</span>
        )}

        <div className="flex gap-4 mt-4">
          {live && (
            <a
              href={live}
              className="bg-orange-500 text-black px-4 py-2 rounded-lg text-sm hover:scale-105 transition"
            >
              Live
            </a>
          )}

          <a
            href={github}
            className="border border-gray-600 px-4 py-2 rounded-lg text-sm hover:border-orange-500 transition"
          >
            Code
          </a>
        </div>
      </div>

    </div>
  );
}
