/* Instruments */
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // You can use other storage options if needed
// slices
import productReducer from './slices/product';
import UserReducer from './slices/user';
import WishlistReducer from './slices/wishlist';
import CartReducer from './slices/cart';
import SettingsReducer from './slices/settings';

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: []
};

const productPersistConfig = {
  key: 'product',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['sortBy', 'checkout']
};
const wishlistPersistConfig = {
  key: 'wishlist',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['wishlist']
};
const cartPersistConfig = {
  key: 'cart',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['cart']
};
const settingsPersistConfig = {
  key: 'settings',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['themeMode', 'themeColor']
};
const userPersistConfig = {
  key: 'user',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['user', 'isAuthenticated']
};

const reducer = combineReducers({
  product: persistReducer(productPersistConfig, productReducer),
  user: persistReducer(userPersistConfig, UserReducer),
  settings: persistReducer(settingsPersistConfig, SettingsReducer),
  wishlist: persistReducer(wishlistPersistConfig, WishlistReducer),  
  cart: persistReducer(cartPersistConfig, CartReducer)

});
export { rootPersistConfig, reducer };
