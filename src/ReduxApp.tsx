import { Provider } from "react-redux";
import { createStore } from "./store";

type Props = {
  children: React.ReactNode;
};

export const ReduxApp: React.FC<Props> = ({ children }) => {
  const store = createStore();

  return <Provider store={store}>{children}</Provider>;
};
