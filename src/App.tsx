import { Toaster } from "react-hot-toast";
import Routes from "routes";

import Provider from "./provider";

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
