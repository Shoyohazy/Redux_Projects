import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://shopping-cart-6cfb9-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Fetching data failed....");
      }

      const data = response.json();
      return data;
    };

    try{
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart(cartData))
    }catch(error){
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error..",
          message: "Error Loading Cart Data",
        })
      );
    }

  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "Loading",
        title: "Sending..",
        message: "Data is loading",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://shopping-cart-6cfb9-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Data was not loaded..");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Data Sent",
          message: "Data has been sent Succesfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error..",
          message: "Error Loading Cart Data",
        })
      );
    }
  };
};
