import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filters/slice";
import { authReducer } from "./auth/slice";
import { taskReducer } from "./tasks/slice";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    auth: authReducer,
    tasks: taskReducer,
  },
});

// import { Provider } from "react-redux";
// import { store } from "./redux/store";

// <Provider store={store}>
// <App />
// </Provider>
