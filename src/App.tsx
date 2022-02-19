import "./App.css";
import Routes from "routes";
import { Toaster } from "react-hot-toast";
import Provider from "provider";

function App() {
  return (
    <Provider>
      <Toaster
        containerStyle={{
          top: 72,
        }}
      />
      <Routes />
    </Provider>
  );
}

export default App;
