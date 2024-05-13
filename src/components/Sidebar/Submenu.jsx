import { NavLink } from "react-router-dom";
import { ExpandIcon } from "@/styles/SidebarIcons";

const StyledNavLink = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg ${
        isActive
          ? "text-indigo-600 bg-gray-50"
          : "text-slate-700 hover:bg-gray-100"
      } dark:${
        isActive
          ? "text-white bg-[#1d195b]"
          : "hover:bg-gray-900 text-slate-800 hover:text-slate-800"
      } dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`
    }
  >
    {children}
  </NavLink>
);

const Submenu = ({ items, isFinanceAccordionOpen, toggleFinanceAccordion }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} className={item.subLinks ? "hs-accordion" : ""}>
          {item.subLinks ? (
            <>
              <button
                type="button"
                className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-[#1d195b] dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                onClick={toggleFinanceAccordion}
              >
                {item.icon}
                {item.text}
                <ExpandIcon />
              </button>
              <div
                className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${
                  isFinanceAccordionOpen ? "" : "hidden"
                }`}
              >
                <ul className="pt-2 ps-2">
                  {item.subLinks.map((subLink, subIndex) => (
                    <StyledNavLink key={subIndex} to={subLink.link}>
                      {subLink.text}
                    </StyledNavLink>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <StyledNavLink to={item.link}>
              {item.icon}
              {item.text}
            </StyledNavLink>
          )}
        </li>
      ))}
    </ul>
  );
};

export { Submenu };
