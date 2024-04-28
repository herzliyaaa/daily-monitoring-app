import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Dashboard } from "./features/dashboard";
import { Expense } from "./features/expense/Expense";
import NotFound from "./features/not-found";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/expenses" element={<Expense />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
