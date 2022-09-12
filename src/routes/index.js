import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const routesConfig = [
  {
    path: "*",
    element: <Home />,
  },
];

const AppRoute = () => {
  return (
    <Routes>
      {routesConfig.map((options, idx) => (
        <Route key={`routes-${idx}`} {...options} />
      ))}
      {/* <Route path="*" element={<h1>Not found</h1>} /> */}
    </Routes>
  );
};

export default AppRoute;
