import React, { FC } from "react";
import AppDrawer from "./components/molecules/app-drawer/AppDrawer";
import Home from "./components/pages/Home";

const App: FC = () => (
  <AppDrawer>
    <Home />
  </AppDrawer>
);

export default App;
