import { uiActions } from "./ui-slice"

export const sendCartData = (cart) => {
   return async (dispatch)=>{
    dispatch(
        uiActions.showNotification({
          status: "Loading",
          title: "Sending..",
          message: "Data is loading",
        })
      );
    
      const sendRequest = async ()=>{
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
      }



      try{
        await sendRequest();
        dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Data Sent",
              message: "Data has been sent Succesfully",
            })
          );
      }catch(error){
        dispatch(
            uiActions.showNotification({
              status: "error",
              title: "Error..",
              message: "Error Loading Cart Data",
            })
          );
      }

   }
}
