import { useEffect, useState, useCallback, useContext, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { MenuOutline } from "react-ionicons";
import { contactChannel } from "@mock-data/contact";
import { routes } from "@config/routes";
import { ToastContext } from "context/toast";
import { twMerge } from "tailwind-merge";
import { ContactChannel } from "@_types";
import { wvLogo } from "@constants/imagePath";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [listVisivle, setListVisible] = useState(false);
  const toastReducer = useContext(ToastContext);
  const isMobile = useMemo(() => window.innerWidth < 768, [window.innerWidth]);

  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(true);
    }
    if (isMobile) {
      setIsMenuOpen(false);
    }
    window.addEventListener("resize", () => {
      !isMobile ? setIsMenuOpen(false) : setIsMenuOpen(true);
      setListVisible(false);
    });
  }, []);

  const toggleHandler = useCallback(
    () => setIsMenuOpen((state) => !state),
    [setIsMenuOpen]
  );

  const dropdownHandler = (l: ContactChannel) => {
    if (!l.url) {
      navigator.clipboard.writeText(l.via);
      toastReducer?.action.openToast();
      toastReducer?.action.setToastMessage(l.via);
      return;
    } else window.open(l.url, "_blank");
  };

  return (
    <nav className="z-10 bg-secondary border-solid border-2 border-gray-200 dark:bg-gray-900 w-screen fixed flex justify-between flex-wrap items-center mx-auto p-4 px-[25px] lg:px-[100px] top-0 max-x-screen-xl">
      <a href={routes.home.path}>
        <img src={wvLogo} className="h-10 mr-3" alt="WVLogo" />
      </a>
      {/* mobile menu button */}
      <button className="me-4 cursor-ponter md:hidden block z-10">
        <MenuOutline
          color="#00000"
          height="20px"
          width="20px"
          onClick={toggleHandler}
        />
      </button>
      <ul
        className={twMerge(
          "absolute w-full border-t-0 my-2 trasnsition-all ease-in duration-500 md:py-4 left-0 md:w-auto md:static z-[-1] md:-top-120px md:z-auto md:flex md:items-center md:p-0 md:dark:bg-gray-50 md:flex-row md:space-x-8 md:mt-0 flex-col font-medium p-4 mt-4 border border-gray-100 rounded-lg md:border-0 bg-white dark:bg-gray-800 dark:border-gray-700",
          [isMenuOpen ? "-bottom-36 opacity-100" : "opacity-0 -top-40"]
        )}
      >
        {Object.keys(routes).map((link) => (
          <NavLink
            onClick={() => {
              if (isMobile) {
                setIsMenuOpen(false);
              }
            }}
            key={link}
            to={link}
            className="group text-secondary transition duration-300 hover:text-gray-400 z-10 "
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "black",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
          >
            <li className="px-2">{link}</li>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black m-auto"></span>
          </NavLink>
        ))}
        {/* dropdown */}
        <li className="relative flex justify-center items-center z-2 ">
          <button
            className="
                        relative flex justify-center items-center
                        text-black rounded focus-ring ring-gray-200
                        "
            onClick={() => {
              setListVisible((prev) => !prev);
            }}
          >
            <p
              className="px-2 group text-black transition duration-300 hover:text-gray-400 "
              onClick={() => {
                setListVisible((prev) => !prev);
              }}
            >
              contact
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black m-auto"></span>
            </p>
            <span className="border-l hover:bg-gray-100  ">
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

            {/* contact */}
            <div
              className={twMerge(
                "absolute top-full min-w-full w-max shadow-md mt-1 rounded transition bg-white",
                [!listVisivle ? "invisible" : "visible"]
              )}
            >
              <ul className="text-left border rounded-sm">
                {contactChannel.map((link, index) => (
                  <li
                    className="px-4 py-1 hover:bg-gray-100 border-b z-10"
                    key={index}
                  >
                    <div
                      onClick={() => {
                        dropdownHandler(link);
                      }}
                    >
                      {link.src}: {link.via}
                    </div>
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
