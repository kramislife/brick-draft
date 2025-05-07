import React from "react";
import { BrowserRouter } from "react-router-dom";
import UserRoutes from "@/components/routes/UserRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <UserRoutes />
    </BrowserRouter>
  );
};

export default App;
