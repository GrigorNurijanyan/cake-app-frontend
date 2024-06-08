import React, { useEffect } from "react";

const Users = ({ setPageTitle }) => {
  useEffect(() => {
    setPageTitle("Users");
  }, []);
  return <div>Users</div>;
};

export default Users;
