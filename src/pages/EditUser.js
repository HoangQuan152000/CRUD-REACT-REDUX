import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, loadUser, loadUsers, putUser } from "../redux/actions";

const EditUser = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const { name, email, contact, address } = state;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.data);
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    dispatch(loadUser(id));
  }, []);
  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, [user]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    if (name && email && contact && address) {
      dispatch(putUser(state, id));
      navigate("/");
      setError("");
    } else {
      setError("Hãy nhập đầy đủ thông tin ");
    }
  };

  return (
    <div>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <h1 style={{ marginRight: 10 }}>Edit User</h1>
        <Button
          variant="contained"
          color="warning"
          onClick={() => navigate("/")}
          size="small"
          sx={{ height: 50, position: "relative", top: 15 }}
        >
          Back Home
        </Button>
      </div>

      <div style={{ justifyContent: "center", display: "flex" }}>
        <form noValidate type={onsubmit} onSubmit={handleUpdate}>
          <TextField
            id="standard-basic"
            label="name"
            variant="standard"
            name="name"
            value={name || ""}
            type="text"
            required
            onChange={handleInputChange}
          />{" "}
          <br />
          <TextField
            id="standard-basic"
            label="email"
            variant="standard"
            name="email"
            value={email || ""}
            type="email"
            required
            onChange={handleInputChange}
          />{" "}
          <br />
          <TextField
            id="standard-basic"
            label="contact"
            variant="standard"
            name="contact"
            value={contact || ""}
            type="tel"
            required
            onChange={handleInputChange}
          />
          <br />
          <TextField
            id="standard-basic"
            label="address"
            variant="standard"
            name="address"
            value={address || ""}
            required
            type="text"
            onChange={handleInputChange}
          />
          <br />
          <h3 style={{ color: "red" }}>{error}</h3>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ margin: "40px 40px 0 50px", display: "flex" }}
          >
            Update
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
