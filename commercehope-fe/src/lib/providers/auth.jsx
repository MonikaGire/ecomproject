import { useEffect } from 'react';
// redux
import { useDispatch } from '../redux';
import { setLogout } from '../redux/slices/user';
import { setWishlist } from '../redux/slices/wishlist';
import { setCart } from '../redux/slices/cart';

// cookies
import { deleteCookies } from 'src/hooks/cookies';

export default function AuthProvider({ children, isAuth }) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isAuth) {
      deleteCookies('token');
      dispatch(setLogout());
      dispatch(setWishlist());
      dispatch(setCart());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return children;
}
