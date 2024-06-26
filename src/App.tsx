import "./App.css";
import { Routes, Route } from "react-router-dom";
import { appRoutes } from "./route/appRoutes";
import CoursePage from "./pages/CoursePage/CoursePage";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path={appRoutes.MAIN} element={< />}></Route>*/}
        <Route path={appRoutes.COURSE} element={<CoursePage />}></Route>
        {/* <Route path={appRoutes.PROFILE} element={< />}></Route>
        <Route path={appRoutes.TRAINING} element={< />}></Route>
        <Route path={appRoutes.LOGIN} element={< />}></Route>
        <Route path={appRoutes.SIGNIN} element={< />}></Route>  */}
      </Routes>
    </>
  );
}

export default App;