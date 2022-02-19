import { createContext, useContext, useState } from "react";

interface TopBarContextInterface {
  title: string;
  changeTitle: (title: string) => void;
}

const TopBarContext = createContext<TopBarContextInterface>({
  title: "",
  changeTitle: () => {},
});

const TopBarProvider: React.FC = (props) => {
  const [title, setTitle] = useState("Pokédex App");

  const changeTitle = (title: string) => {
    if (title === "default") setTitle("Pokédex App");
    else setTitle(title);
  };

  return <TopBarContext.Provider value={{ title, changeTitle }} {...props} />;
};

const useTopBar = () => {
  return useContext(TopBarContext);
};

export { TopBarContext, TopBarProvider, useTopBar };
