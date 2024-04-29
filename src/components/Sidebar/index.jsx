import {
  DashboardIcon,
  FinanceIcon,
  ExpandIcon,
  ProjectsIcon,
  CalendarIcon,
  PasswordManagerIcon,
} from "./SidebarIcons";
import { Link } from "react-router-dom";
import { Submenu } from "./Submenu";

export default function Sidebar() {
  const submenuItems = [
    {
      text: "Dashboard",
      icon: <DashboardIcon />,
      link: "/",
    },
    {
      text: "Projects",
      icon: <ProjectsIcon />,
      link: "/projects",
    },
    {
      text: "Calendar",
      icon: <CalendarIcon />,
      link: "/calendar",
    },
    {
      text: "Password",
      icon: <PasswordManagerIcon />,
      link: "/password-manager",
    },
  ];

  return (
    <div>
      <div
        id="application-sidebar"
        className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-[#1d195b] dark:border-gray-700"
      >
        <div className="px-6">
          <a
            className="flex-none text-2xl font-semibold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
            aria-label="Brand"
          >
            daily.
          </a>
        </div>

        <nav
          className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open
        >
          <ul className="space-y-1.5">
            <Submenu items={submenuItems} />
            {/* <li>
              <a
                className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-[#1d195b] dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                <DashboardIcon />
                Dashboard
              </a>
            </li> */}

            <li className="hs-accordion" id="finance-accordion">
              <button
                type="button"
                className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-[#1d195b] dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                onClick={() => {
                  const financeAccordionChild = document.getElementById(
                    "finance-accordion-child"
                  );
                  financeAccordionChild.classList.toggle("hidden");
                }}
              >
                <FinanceIcon />
                Finance
                <ExpandIcon />
              </button>

              <div
                id="finance-accordion-child"
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
              >
                <ul className="pt-2 ps-2">
                  <li>
                    <Link to="/expenses">
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        href=""
                      >
                        Expenses
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/income">
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        href="#"
                      >
                        Income
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/liabilities">
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        href="#"
                      >
                        Liabilities
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      {/* <!-- End Sidebar --> */}
    </div>
  );
}
