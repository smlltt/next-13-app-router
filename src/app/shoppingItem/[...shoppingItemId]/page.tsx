import React from "react";

const ShoppingItem = (props: any) => {
  console.log(props); //with the ... ([...shoppingItemId], whatever comes after /shoppingItemId (shoppingItem/1/red/) is available: { params: { shoppingItemId: [ '1', 'red' ] }, searchParams: {} }
  return <div>ShoppingItem</div>;
};

export default ShoppingItem;
