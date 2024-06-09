import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filters/slice";
import { authReducer } from "./auth/slice";
import { boardReducer } from "./boards/slice";
import { columnReducer } from "./columns/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "authSlice",
  storage,
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    boards: boardReducer,
    columns: columnReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// Зразок використання store

// ------------------------------------
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";

// import { selectIsRefreshing } from "../redux/auth/selectors";
// import { register } from "../../redux/auth/operations";

// -------------------------------------------------
// відправка даних реєстрації
// const handleSubmit = (values, actions) => {
// dispatch(register(values));
// actions.resetForm();
// };
// --------------------------------------------------
// dispatch(назва операції(значення які передаємо за потреби));
// --------------------------------------------------
// приклад отримання якоїсь властивості зі слайсу, в даному випадку isRefreshing
// const userIsRefresh = useSelector(selectIsRefreshing);
// ------------------------------------------------------
