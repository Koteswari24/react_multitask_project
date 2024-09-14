
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routesData } from "../utils/mock";
import layoutHook from "../utils/hooks/layoutHook";

const RoutesPath = () => (
  <Router>
    <Routes>
      {routesData.map((route, index) => {
        const { path, exact, component, layout } = route;
        return (
          <Route
            key={index}
            path={path}
            exact={exact}
            element={layoutHook(component, layout)()}
          />
        );
      })}
    </Routes>
  </Router>
);

export default RoutesPath;
