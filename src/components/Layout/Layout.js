import React from "react";
import Header from "components/Header";
import Notifications from "components/Notifications";

export default ({ children }) => (
  <div>
    <Header />
    <Notifications />
    {children}
  </div>
);
