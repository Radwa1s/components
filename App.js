import React from "react";
import './App.css'
import { MyFirstComponent } from "./componentTest"
import { Address } from "./profile/Address";
import { FullName } from "./profile/FullName";
import { ProfilePhoto } from "./profile/ProfilePhoto";
const App = () => {
  return (
    <>
      <MyFirstComponent />
      <ProfilePhoto />
      <FullName />
      <Address />
    </>
  );
};
export default App;