import { Toaster } from "react-hot-toast";

import Provider from "./provider";

import Routes from "routes";

function App() {
  const toasterContainerStyle = {
    top: 72,
  };

  return (
    <Provider>
      <Toaster containerStyle={toasterContainerStyle} />
      <Routes />
    </Provider>
  );
}

export default App;
