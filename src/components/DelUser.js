import react, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { delUser } from "../service/api";

const DelUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const delUserDetails = async (id) => {
    try {
      await delUser(id);
      navigate("/all");
    } catch (error) {
      console.log("Error", error.message);
    }
  };
  useEffect(() => {
    delUserDetails(id);
  }, []);
  return (
    <>
      <h1></h1>
    </>
  );
};

export default DelUser;
