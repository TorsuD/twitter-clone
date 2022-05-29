import "./App.css";
import Feed from "./components/feed/Feed";
import Sidebar from "./components/sidebar/Sidebar";
import Widget from "./components/widgets/Widget";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <Feed />

      <Widget />
    </div>
  );
}

export default App;
