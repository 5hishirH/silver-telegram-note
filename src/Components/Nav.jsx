import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuthContext from "../CustomHooks/useAuthContext";
import axios from "axios";
import Swal from "sweetalert2";

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
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      focusCancel: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleSignOut();
      }
    });
  };

  return (
    <div>
      {/* desktop navigation */}
      <div className="hidden sm:block navbar bg-base-100 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
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
      {/* mobile navigation */}
      <div className="sm:hidden px-4 fixed top-0 navbar bg-base-100 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="flex-1">
          <Link to={"/"} className="flex items-center gap-2 px-2">
            <div className="w-6 h-6">
              <img
                src="/note-icon.png"
                alt="logo"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-lg font-medium">NOTE</h2>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <NavLink
            to={"/create-note"}
            className="btn btn-outline btn-primary rounded-full btn-sm text-xs"
          >
            CREATE
          </NavLink>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-8 rounded-full">
                <img alt="profile" src={user?.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <h3>{user?.displayName}</h3>
              </li>
              <li>
                <div
                  onClick={handleLogOut}
                  className="pointer-cursor text-error font-medium"
                >
                  Logout
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
