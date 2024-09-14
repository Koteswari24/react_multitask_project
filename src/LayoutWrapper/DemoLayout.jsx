import React from "react";

export const DemoLayout = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 bg-warning  vh-100">
          {children}
        </div>
      </div>
    </div>
  );
};