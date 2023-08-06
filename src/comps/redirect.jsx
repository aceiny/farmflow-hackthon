import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Redirect = () => {
    const authpage = 'http://localhost:5173/'
  const navigate = useNavigate();
  useEffect(() => {
      window.location.href = authpage;
  }, []);

  return null; 
}

export default Redirect;
