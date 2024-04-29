/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useState } from "react";
import { ExpandIcon } from "./SidebarIcons";

const Submenu = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <li key={index}>
          <a
            className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            {item.icon}
            <Link to={item.link}>{item.text}</Link>
          </a>
        </li>
      ))}
    </>
  );
};

const AccordionItem = ({ title, icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="hs-accordion">
      <button
        type="button"
        className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-[#1d195b] dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        {icon}
        {title}
        <ExpandIcon isOpen={isOpen} />
      </button>

      <div
        className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${
          isOpen ? "" : "hidden"
        }`}
      >
        <ul className="pt-2 ps-2">{children}</ul>
      </div>
    </li>
  );
};

const Accordion = () => {
  return (
    <AccordionItem title="Finance">
      <li>
        <Link to="/expenses">
          <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
            Expenses
          </a>
        </Link>
      </li>
      <li>
        <Link to="/income">
          <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
            Income
          </a>
        </Link>
      </li>
      <li>
        <Link to="/liabilities">
          <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
            Liabilities
          </a>
        </Link>
      </li>
    </AccordionItem>
  );
};

export { Submenu, AccordionItem, Accordion };
