import { BrowserRouter, Routes, Route } from "react-router-dom";
import Expense from "./features/expense/Expense";
import Dashboard from "./features/dashboard/Dashboard";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/expenses' element={<Expense />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
