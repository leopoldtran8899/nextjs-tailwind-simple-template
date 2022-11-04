import * as React from 'react';

const initialState = {
  likes: 0,
};
const AppContext = React.createContext({
  state: initialState,
  dispatch: () => null,
});
const appActions = {
  ADD_LIKES_ACTION: 'ADD_LIKES_ACTION',
  REMOVE_LIKES_ACTION: 'REMOVE_LIKES_ACTION',
};
function appReducer(state, action) {
  switch (action.type) {
    case appActions.ADD_LIKES_ACTION: {
      return { ...state, likes: state.likes + 1 };
    }
    case appActions.REMOVE_LIKES_ACTION: {
      return { ...state, likes: state.likes > 0 ? state.likes - 1 : 0 };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}


function AppProvider({ children }) {
  const [state, dispatch] = React.useReducer(appReducer, initialState);
  return <AppContext.Provider value={[state, dispatch]}>{children}</AppContext.Provider>;
}

function useAppContext() {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within a AppProvider');
  }
  return context;
}

export { AppProvider, useAppContext, appActions };
