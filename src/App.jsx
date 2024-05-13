import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Dashboard } from "./features/dashboard";
import { Expense } from "./features/expense/Expense";
import { Liabilities } from "./features/expense/Liabilities";
import { Income } from "./features/expense/Income";
import Calendar from "./features/calendar";
import PasswordManager from "./features/password";
import Projects from "./features/projects";
import PageLayout from "./components/Layout";

import NotFound from "./features/not-found";

const components = {
  Dashboard,
  Expense,
  Liabilities,
  Income,
  Calendar,
  PasswordManager,
  Projects,
};

const wrappedComponents = Object.fromEntries(
  Object.entries(components).map(([key, Component]) => [
    key + "WithLayout",
    PageLayout(Component),
  ])
);

const {
  DashboardWithLayout,
  ExpenseWithLayout,
  IncomeWithLayout,
  LiabilitiesWithLayout,
  PasswordManagerWithLayout,
  CalendarWithLayout,
  ProjectsWithLayout,
} = wrappedComponents;

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<DashboardWithLayout />} />
        <Route exact path="/expenses" element={<ExpenseWithLayout />} />
        <Route exact path="/liabilities" element={<LiabilitiesWithLayout />} />
        <Route exact path="/income" element={<IncomeWithLayout />} />
        <Route exact path="/calendar" element={<CalendarWithLayout />} />
        <Route
          exact
          path="/password-manager"
          element={<PasswordManagerWithLayout />}
        />
        <Route exact path="/projects" element={<ProjectsWithLayout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
