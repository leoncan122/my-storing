import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { User } from "./features/user/User";
import { Routes, Route } from "react-router-dom";
import AuthLogin from "./features/auth/login/AuthLogin";

function App() {
  return (
    <div className="App">
      <header>My Storing with React-Redux and tailwind</header>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/login" element={<AuthLogin />} />
      </Routes>
    </div>
  );
}

export default App;
