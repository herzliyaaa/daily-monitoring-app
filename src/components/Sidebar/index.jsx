import { useState } from "react";
import { Submenu } from "./Submenu";
import { SubmenuItems } from "@/constants/navItems";

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
            <Submenu
              items={SubmenuItems}
              isFinanceAccordionOpen={isFinanceAccordionOpen}
              toggleFinanceAccordion={toggleFinanceAccordion}
            />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
