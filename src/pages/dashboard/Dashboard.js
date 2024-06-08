import React, { useEffect } from "react";

const Dashboard = ({ setPageTitle }) => {
  useEffect(() => {
    setPageTitle("Dashboard");
  }, []);
  return <div>Dashboard</div>;
};

export default Dashboard;
