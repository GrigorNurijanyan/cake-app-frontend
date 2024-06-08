import React, { useEffect } from "react";

const Orders = ({ setPageTitle }) => {
  useEffect(() => {
    setPageTitle("Orders");
  }, []);

  return <div>Orders</div>;
};

export default Orders;
