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
        bg-primary
        border-quaternary fixed top-0
        z-10 flex w-screen
        items-center justify-between border-b
        p-4 px-[25px]
        text-black lg:px-[100px]
        dark:bg-black dark:text-white
      "
    >
      <a
        href={routes.home.path}
        className="
          bg-primary inline-flex items-center
          justify-center rounded-full
          p-1 dark:bg-white
        "
      >
        <img
          src={WV_LOGO}
          alt="WVLogo"
          className="h-10 w-10 rounded-full object-cover"
        />
      </a>

      <button className="z-10 me-4 block md:hidden">
        <Menu size={20} onClick={toggleHandler} />
      </button>

      <ul
        className={twMerge(
          `
          border-quaternary absolute left-0 mt-4 flex
          w-full flex-col gap-2
          rounded-lg
          border p-4 font-medium
          transition-[opacity,transform] duration-500 ease-in
          md:static md:mt-0 md:w-auto md:flex-row
          md:items-center md:space-x-8 md:border-0 md:p-0
        `,
          isMenuOpen ? "-bottom-43 opacity-100" : "-top-100 opacity-0",
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
                "hover:text-tertiary text-black dark:text-white",
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
            <p className="hover:text-tertiary px-2 transition duration-300">
              contact
            </p>

            <span className="hover:bg-quaternary border-l">
              <svg
                className="ml-2 h-2.5 w-2.5"
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
                bg-primary absolute top-full left-0
                 mt-1 -ml-30 w-max
                min-w-full rounded text-black
                shadow-md transition dark:text-white
              `,
                listVisible ? "visible" : "invisible",
              )}
            >
              <ul className="rounded-sm border text-left">
                {contactChannel.map((item) => (
                  <li
                    key={item.via}
                    className="
                      hover:bg-quaternary border-b
                      px-4
                      py-1
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
