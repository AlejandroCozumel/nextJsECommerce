import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useReducer,
  useMemo,
} from "react";

export interface StateModifiers {
  openSidebar: () => void;
  closeSidebar: () => void;
}

export interface StateValues {
  isSidebarOpen: boolean;
}

const stateModifiers = {
  openSidebar: () => {},
  closeSidebar: () => {},
};

const initialSate = {
  isSidebarOpen: false,
};

type CompProps = {
  children: ReactNode;
};

type State = StateValues & StateModifiers;

const UIContext = createContext<State>({
  ...stateModifiers,
  ...initialSate,
});

type Action = {
  type: "OPEN_SIDEBAR" | "CLOSE_SIDEBAR";
};

function uiReducer(state: StateValues, action: Action) {
  switch (action.type) {
    case "OPEN_SIDEBAR": {
      return { ...state, isSidebarOpen: true };
    }
    case "CLOSE_SIDEBAR": {
      return { ...state, isSidebarOpen: false };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

const UIProvider: FC<CompProps> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialSate);

  const openSidebar = () => dispatch({ type: "OPEN_SIDEBAR" });
  const closeSidebar = () => dispatch({ type: "CLOSE_SIDEBAR" });

  const value = useMemo(() => {
    return {
      ...state,
      openSidebar,
      closeSidebar,
    };
  }, [state.isSidebarOpen]);

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export const useUI = () => {
  const context = useContext(UIContext);
  return context;
};

export default UIProvider;
