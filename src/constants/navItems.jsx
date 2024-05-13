import {
    DashboardIcon,
    FinanceIcon,
    ProjectsIcon,
    CalendarIcon,
    PasswordManagerIcon,
  } from "@/styles/SidebarIcons";

export const SubmenuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, link: "/" },
    { text: "Projects", icon: <ProjectsIcon />, link: "/projects" },
    { text: "Calendar", icon: <CalendarIcon />, link: "/calendar" },
    {
      text: "Password",
      icon: <PasswordManagerIcon />,
      link: "/password-manager",
    },
    {
      text: "Finance",
      icon: <FinanceIcon />,
      subLinks: [
        {
          text: "Expenses",
          icon: "",
          link: "/expenses",
        },
        {
          text: "Income",
          icon: "",
          link: "/income",
        },
        {
          text: "Liabilities",
          icon: "",
          link: "/liabilities",
        },
      ],
    },
  ];