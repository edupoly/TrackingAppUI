import { Outlet } from "react-router-dom";
import Login from "./features/user/Login";


function App() {
  return (
    <div>
      <h1>Tricketing App...</h1>

      <Outlet></Outlet>
    </div>
  );
}

export default App;
