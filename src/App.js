import "./App.css";
import ApiData from "./components/ApiData";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
import PostData from "./components/PostData";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import EditData from "./components/EditData";
function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/showdata" element={<ApiData />} />
          <Route path="/adddata" element={<PostData />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/edit" element={<EditData />} />
        </Routes>
        {/* <Counter />
        <ApiData />
        <PostData /> */}
      </div>
    </>
  );
}

export default App;
