import React from 'react';
import '../../style/dashboard.css'; 
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Welcome to the Dashboard</h1>
      <div className="card">
        <div className="card-content">
          <h2>Explore</h2>
          <div className="button-container">
          
            <Link to="/ViewAllCustomer">
              <button className="button view-users-button">View All Customer</button>
            </Link>
          
            <Link to="/ViewAllServiceCenter">
              <button className="button view-service-centers-button">All Service Centers</button>
            </Link>

            <Link to="/ServiceCenter">
              <button className="button view-service-centers-button">Add Service Centers</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
