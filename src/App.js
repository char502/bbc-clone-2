import React from "react";

//Components
import PageNav from "../src/components/navBars/PageNav/PageNav";
import MainNewsNav from "../src/components/navBars/MainNewsNav/MainNewsNav";
import LocalNewsNav from "../src/components/navBars/LocalNewsNav/LocalNewsNav";
import MainBodyNewsOne from "../src/components/mainNews/MainBodyNewsOne";

function App() {
  return (
    <div className="App">
      <PageNav />
      <MainNewsNav />
      <LocalNewsNav />
      <MainBodyNewsOne />
    </div>
  );
}

export default App;
