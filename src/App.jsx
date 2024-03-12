import * as React from "react";
import Search from "./components/Search";
import List from "./components/List";

function App() {
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search />
      <hr />
      <List />
      </div>
  );
}
export default App;
