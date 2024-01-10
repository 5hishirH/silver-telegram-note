import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuthContext from "../CustomHooks/useAuthContext";
import axios from "axios";

const Nav = () => {
  const { user, handleSignOut } = useAuthContext();

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

  const handleLogOut = () => {
    handleSignOut();
  };

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
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-primary font-medium"
                    : ""
                }
              >
                {e.name}
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="navbar-end flex gap-4">
          <button
            onClick={handleLogOut}
            className="btn btn-outline btn-warning btn-sm rounded-full"
          >
            Sign Out
          </button>
          <div className="avatar online">
            <div className="w-9 rounded-full">
              <img src={user?.photoURL} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
