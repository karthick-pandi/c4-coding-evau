import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { NewOrder } from "./components/NewOrder";
import { Orders } from "./components/Orders";
// import { ProtectedRoute } from "./components/ProtextedRoute";
import { Link, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((store) => store.isLoggedIn);
  return (
    <div className="App">
      <div>
        <Link className="nav-home" to="/">
          Home
        </Link>
        {user != null && user[1] === true ? (
          <Link className="nav-logout" to="/logout">
            Logout
          </Link>
        ) : (
          <Link className="nav-login" to="/login">
            Login
          </Link>
        )}
      </div>

      <Routes>
        <Route path="/" element={<Home></Home>}>
          {" "}
        </Route>
        <Route path="/login" element={<Login></Login>}>
          {" "}
        </Route>
        <Route path="/logout" element={<Logout></Logout>}>
          {" "}
        </Route>
        <Route path="/orders" element={<Orders></Orders>}>
          {" "}
        </Route>
        <Route path="/neworder" element={<NewOrder></NewOrder>}>
          {" "}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
