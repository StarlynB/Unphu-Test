import React from "react";
import Header from "../Components/Header";

const UersList = () => {
  const profilePIcDefault =
    "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png";
  return (
    <div>
      <Header />
      <div className="container content">
        <div className="border mt-4 p-4">
          <h3 className="text-center bg-info p-2 mb-3">
            Welcome To User Management System
          </h3>
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <div className="ms-4">
              <h4>
                  Id :{" "}
                  {localStorage.getItem("Id")
                    ? localStorage.getItem("Id")
                    : "NA"}
                </h4>
                <h4>
                  Names :{" "}
                  {localStorage.getItem("name")
                    ? localStorage.getItem("name")
                    : "NA"}
                </h4>
                <h4>
                  Key :{" "}
                  {localStorage.getItem("primer apellido")
                    ? localStorage.getItem("primer apellido")
                    : "NA"}
                </h4>
                <h4>
                  Email :{" "}
                  {localStorage.getItem("segundo apellido")
                    ? localStorage.getItem("segundo apellido")
                    : "NA"}
                </h4>
                
                <h4>
                  Email :{" "}
                  {localStorage.getItem("Correo Electronico")
                    ? localStorage.getItem("Correo Electronico")
                    : "NA"}
                </h4>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UersList;