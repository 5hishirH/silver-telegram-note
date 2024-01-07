import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const nav_links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Create Note",
      path: "/create-note",
    },
  ];
  return (
    <div>
      {/* desktop navigation */}
      <div className="navbar bg-base-100 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="navbar-start">
          <Link to={"/"} className="flex items-center gap-2">
            <div className="w-6 h-6">
              <img
                src="/note-icon.png"
                alt="logo"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-medium">Note</h2>
          </Link>
        </div>
        <div className="navbar-center">
          <ul className="flex gap-6">
            {nav_links?.map((e, i) => (
              <NavLink
                key={i}
                to={e.path}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-primary font-medium" : ""
                }
              >
                {e.name}
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
