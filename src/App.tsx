import { Fragment } from "react";
import Header from "./components/header";
import GlobalStyle from "./Styles/GlobalsStyles";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
    </Fragment>
  );
}

export default App;
