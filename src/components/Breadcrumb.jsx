import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const { pathname } = useLocation();
  const page = pathname.split("/").pop();

  return (
    <div className="mb-10 text-sm flex items-center gap-2">

      {/* Desktop breadcrumb */}
      <div className="hidden sm:flex items-center gap-2 text-gray-400">

        <Link to="/" className="hover:text-orange-400 transition">
          Home
        </Link>

        {pathname.startsWith("/portfolio") && (
          <>
            <span>/</span>
            <Link to="/#portfolio" className="hover:text-orange-400 transition">
              Portfolio
            </Link>
          </>
        )}

        {pathname !== "/" && (
          <>
            <span>/</span>
            <span className="capitalize text-orange-400">
              {page}
            </span>
          </>
        )}

      </div>

      {/* Mobile collapsed breadcrumb */}
      <div className="sm:hidden flex items-center gap-3">

        <Link
          to="/#portfolio"
          className="text-orange-400 text-lg font-semibold"
        >
          ← Portfolio
        </Link>

        <span className="text-gray-500 text-sm capitalize">
          {page}
        </span>

      </div>

    </div>
  );
}
