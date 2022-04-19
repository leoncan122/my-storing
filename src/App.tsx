import "./App.css";
import { User } from "./features/user/User";
import { Routes, Route } from "react-router-dom";
import AuthLogin from "./features/auth/login/AuthLogin";
import Menu from "./app/layouts/menu/Menu";
import Coins from "./app/layouts/coins/Coins";

function App() {
  return (
    <div className="App grid grid-cols-6 grid-rows-7 h-screen gap-3">
      <header className="col-start-1 col-end-7 row-start-1 row-end-2">
        My Storing with React-Redux and tailwind
      </header>
      <Menu />
      <div
        className="col-start-2 col-end-7 justify-self-center w-full
        row-start-3 row-end-6  bg-slate-100 "
      >
        <Routes>
          <Route path="/" element={<Coins />} />
          <Route path="/user" element={<User />} />
          <Route path="/login" element={<AuthLogin />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
