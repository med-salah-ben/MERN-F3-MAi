import {Link , Routes, Route} from "react-router-dom"
import { useDispatch } from "react-redux";
import { toggleFalse } from "./JS/actions/edit";
import Edit from "./components/Edit";
import Home from "./components/Home";
import UsersList from "./components/UsersList";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Link to="/">
      <button>Home</button>
      </Link>
      <Link to="/users">
      <button>Users List</button>
      </Link>
      <Link to="/add">
      <button onClick={()=>dispatch(toggleFalse())} >Add Contact</button>
      </Link>
      
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/users" element={<UsersList />} />
        <Route path="/add" element={<Edit />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
