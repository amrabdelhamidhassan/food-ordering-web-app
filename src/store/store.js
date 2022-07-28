import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'
import cartReducer from './reducers/cartReducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
const userPersistConfig = {
    key: 'user',
    storage,
  }
const cartPersistConfig = {
    key: 'cart',
    storage,
  }
  const persistedUserReducer = persistReducer(userPersistConfig, userReducer)
  const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer)

export const store = configureStore({
    reducer: {userReducer:persistedUserReducer,cartReducer:persistedCartReducer},
    middleware: [thunk]

  })
export const persistor = persistStore(store)
