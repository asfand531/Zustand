import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import useAuth from "./store/store";

function App() {
  const { user } = useAuth();

  return (
    <>
      <div>{user ? <Profile /> : <Login />}</div>
    </>
  );
}

export default App;
