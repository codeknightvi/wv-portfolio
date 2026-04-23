import { useEffect, useState, useCallback, useContext, useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { contactChannel } from "@mock-data/contact";
import { routes } from "@config/routes";
import { ToastContext } from "context/toast";
import { twMerge } from "tailwind-merge";
import { ContactChannel } from "@_types";
import { WV_LOGO } from "@config/assets";
import useWindowDimensions from "@hooks/useWindowDimension";

export default function Navbar() {
  const toastReducer = useContext(ToastContext);
  const { width } = useWindowDimensions();
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [listVisible, setListVisible] = useState(false);

  const isMobile = useMemo(() => width < 768, [width]);

  useEffect(() => {
    if (isMobile) {
      setIsMenuOpen(false);
      setListVisible(false);
    } else {
      setIsMenuOpen(true);
      setListVisible(false);
    }
  }, [isMobile, location]);

  const toggleHandler = useCallback(() => {
    setIsMenuOpen((state) => !state);
  }, []);

  const dropdownHandler = (item: ContactChannel) => {
    if (item.url) {
      window.open(item.url, "_blank");
    } else {
      navigator.clipboard.writeText(item.via);
      toastReducer?.action.openToast();
      toastReducer?.action.setToastMessage(item.via);
    }
  };

  return (
    <nav
      className="
        z-10
        fixed top-0 w-screen
        flex items-center justify-between
        p-4 px-[25px] lg:px-[100px]
        bg-primary dark:bg-black
        text-black dark:text-white
        border-b border-quaternary
      "
    >
      <a
        href={routes.home.path}
        className="
          inline-flex items-center justify-center
          p-1 rounded-full
          bg-primary dark:bg-white
        "
      >
        <img
          src={WV_LOGO}
          alt="WVLogo"
          className="h-10 w-10 rounded-full object-cover"
        />
      </a>

      <button className="md:hidden block z-10 me-4">
        <Menu size={20} onClick={toggleHandler} />
      </button>

      <ul
        className={twMerge(
          `
          absolute left-0 w-full mt-4 p-4
          flex flex-col gap-2
          font-medium
          border border-quaternary rounded-lg
          transition-[opacity,transform] duration-500 ease-in
          md:static md:flex-row md:items-center md:space-x-8
          md:w-auto md:p-0 md:mt-0 md:border-0
        `,
          isMenuOpen ? "opacity-100 -bottom-43" : "opacity-0 -top-100",
        )}
      >
        {Object.keys(routes).map((link) => (
          <NavLink
            key={link}
            to={link}
            onClick={() => isMobile && setIsMenuOpen(false)}
            className={({ isActive }) =>
              twMerge(
                "px-2 transition duration-300",
                "text-black dark:text-white hover:text-tertiary",
                isActive && "font-bold",
              )
            }
          >
            <li>{link}</li>
          </NavLink>
        ))}

        {/* Contact dropdown */}
        <li className="relative flex items-center justify-center">
          <button
            onClick={() => setListVisible((prev) => !prev)}
            className="relative flex items-center text-black dark:text-white"
          >
            <p className="px-2 transition duration-300 hover:text-tertiary">
              contact
            </p>

            <span className="border-l hover:bg-quaternary">
              <svg
                className="w-2.5 h-2.5 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </span>

            {/* Dropdown list */}
            <div
              className={twMerge(
                `
                absolute top-full left-0 -ml-30
                 mt-1 min-w-full w-max
                rounded shadow-md transition
                bg-primary text-black dark:text-white
              `,
                listVisible ? "visible" : "invisible",
              )}
            >
              <ul className="text-left border rounded-sm">
                {contactChannel.map((item) => (
                  <li
                    key={item.via}
                    className="
                      px-4 py-1
                      border-b
                      hover:bg-quaternary
                    "
                  >
                    <button onClick={() => dropdownHandler(item)}>
                      {item.src}: {item.via}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </button>
        </li>
      </ul>
    </nav>
  );
}
