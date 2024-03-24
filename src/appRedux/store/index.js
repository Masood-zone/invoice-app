import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";
import adminReducer from "../slice/admin/adminSlice";
import clientReducer from "../slice/clients/clientSlice";
import invoiceReducer from "../slice/invoice/invoiceSlice";
import itemReducer from "../slice/items/itemSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedAdminReducer = persistReducer(persistConfig, adminReducer);

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

  reducer: {
    admins: persistedAdminReducer,
    client: clientReducer,
    item: itemReducer,
    invoice: invoiceReducer,
  },
});

export const persistor = persistStore(store);

export default store;
