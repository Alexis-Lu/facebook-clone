import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [user, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          {<Header />}
          <div className="app__body">
            <div className="app__body__Sidebar">{<Sidebar />}</div>
            <div className="app__body__Feed">{<Feed />}</div>
            <div className="app__body__Widgets">{<Widgets />}</div>
          </div>{" "}
        </>
      )}
    </div>
  );
}

export default App;
