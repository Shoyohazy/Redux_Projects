import { useDispatch, useSelector } from "react-redux";
import Notification from './components/UI/Notification'
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { sendCartData } from "./store/Cart_action";

let isInitialRender = true;

function App() {
  const dispatch = useDispatch();
  const isCartVisible = useSelector((state) => state.ui.isCartVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector(state => state.ui.notification)

  useEffect(() => {
      if(isInitialRender){
        isInitialRender = false;
        return;
      }
      dispatch(sendCartData(cart))
  }, [cart, dispatch]);
  return (
    <>
    {notification && <Notification status = {notification.status} message = {notification.message} title = {notification.title} />}
    <Layout>
      {isCartVisible && <Cart />}
      <Products />
    </Layout>
    </>
  );
}

export default App;
