import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Submenu } from "./Submenu";

import {
  DashboardIcon,
  FinanceIcon,
  ExpandIcon,
  ProjectsIcon,
  CalendarIcon,
  PasswordManagerIcon,
} from "./SidebarIcons";

const SubmenuItems = [
  { text: "Dashboard", icon: <DashboardIcon />, link: "/" },
  { text: "Projects", icon: <ProjectsIcon />, link: "/projects" },
  { text: "Calendar", icon: <CalendarIcon />, link: "/calendar" },
  {
    text: "Password",
    icon: <PasswordManagerIcon />,
    link: "/password-manager",
  },
];

const Sidebar = () => {
  const [isFinanceAccordionOpen, setIsFinanceAccordionOpen] = useState(false);

  const toggleFinanceAccordion = () => {
    setIsFinanceAccordionOpen(!isFinanceAccordionOpen);
  };

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
            <Submenu items={SubmenuItems} />

            {/* Finance Accordion */}
            <li className="hs-accordion" id="finance-accordion">
              <button
                type="button"
                className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-[#1d195b] dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                onClick={toggleFinanceAccordion}
              >
                <FinanceIcon />
                Finance
                <ExpandIcon />
              </button>

              {/* Finance Accordion Content */}
              <div
                id="finance-accordion-child"
                className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${
                  isFinanceAccordionOpen ? "" : "hidden"
                }`}
              >
                <ul className="pt-2 ps-2">
                  <li>
                    <NavLink to="/expenses">
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        href=""
                      >
                        Expenses{" "}
                      </a>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/income">
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        href=""
                      >
                        Income
                      </a>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/liabilities">
                      {" "}
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        href=""
                      >
                        Liabilities
                      </a>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
