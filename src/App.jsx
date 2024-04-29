import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Dashboard } from "./features/dashboard";
import { Expense } from "./features/expense/Expense";
import { Liabilities } from "./features/expense/Liabilities";
import { Income } from "./features/expense/Income";
import Calendar from "./features/calendar";
import PasswordManager from "./features/password";
import Projects from "./features/projects";
// import PageLayout from "./components/Layout";

import NotFound from "./features/not-found";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/expenses" element={<Expense />} />
        <Route exact path="/liabilities" element={<Liabilities />} />
        <Route exact path="/income" element={<Income />} />
        <Route exact path="/calendar" element={<Calendar />} />
        <Route exact path="/password-manager" element={<PasswordManager />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
