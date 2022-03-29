import { Fragment } from "react";
import "./App.css";
import BodyParent from "./components/BodyTemplate/BodyParent";
import FooterParent from "./components/Footer/FooterParent";
import HeaderParent from "./components/Header/HeaderParent";

function App() {
  return (
    <Fragment>
      <HeaderParent />
      {/* <BodyParent /> */}
      <FooterParent />
    </Fragment>
  );
}

export default App;
