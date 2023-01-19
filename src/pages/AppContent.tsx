import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AppContent = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/authorization");
  });
  return (
    <div>
      <div>App Content</div>
      <div>
        <button>Log Out</button>
      </div>
    </div>
  );
};

export default AppContent;
