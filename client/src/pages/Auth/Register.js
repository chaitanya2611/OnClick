import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/AuthStyles.css";
import { Toaster, toast } from 'react-hot-toast'
import { Select } from "antd";
const { Option } = Select;

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, {
        name,
        email,
        password,
        phone,
        address,
        answer,
        role
      });
      if (res && res.data.success) {
        toast(res.data && res.data.message);
        navigate("/login");
      } else {
        toast(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast("Something went wrong");
    }
  };

  return (
    <Layout title="Register - OnClick">
      <div className="form-container ">
        <form onSubmit={handleSubmit}>
          <h4 className="title">REGISTER FORM</h4>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputEmail3"
              placeholder="Enter Your Name"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputEmail2"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="exampleInputEmail4"
              placeholder="Enter Your Address"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputEmail4"
              placeholder="What is Your favourite food ?"
              required
            />
          </div> 

          <div className="mb-3">
                <Select
                  bordered={false}
                  placeholder="Select Role "
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setRole(value);
                  }}
                >
                  <Option value= {0}>User</Option>
                  <Option value={1}>Admin</Option>
                  <Option value={2}>Delievery Person</Option>
                </Select>
              </div>
          
          <button type="submit" className="btn btn-primary">
            REGISTER
          </button>
        </form>
      </div>
      <Toaster />
    </Layout>
  );
};

export default Register;