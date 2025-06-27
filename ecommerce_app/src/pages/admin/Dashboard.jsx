import React, { useEffect } from "react";
import { useUserInfoQuery } from "../../redux/Api/AuthApi";

function Dashboard() {
  const { refetch } = useUserInfoQuery();
  useEffect(() => {
    refetch();
  }, []);
  return (
    <main>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard</h1>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="card text-white bg-primary mb-3">
            <div className="card-body">
              <h5 className="card-title">Total Sales</h5>
              <p className="card-text">$15,000</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-success mb-3">
            <div className="card-body">
              <h5 className="card-title">Orders</h5>
              <p className="card-text">120</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-warning mb-3">
            <div className="card-body">
              <h5 className="card-title">Products</h5>
              <p className="card-text">45</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-danger mb-3">
            <div className="card-body">
              <h5 className="card-title">Customers</h5>
              <p className="card-text">89</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
