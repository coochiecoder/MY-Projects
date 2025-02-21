import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneUserByid, addUser, updateOneUser } from "../services/user.services";
import Header from '../components/Header.jsx'
import "./UserLogin.css"

  const DEFAULT_FORM_DATA = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "", 
    city:"",
    state:"",
    street:"",
    zipCode:"",
    phone:"",

  }

export const UserLogin = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);


  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (id) {
      getOneUserByid(id)
        .then(res => setFormData(res))
        .catch()
    }
  }, [id]);

  const updateFormData = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const submissionFunction = id ? updateOneUser : addUser;
    submissionFunction(formData)
      .then(res =>  navigate(`/Home`))
      .catch((error) =>  setErrors(error))
  }

  return (
    <div>
      <h1>New User</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={updateFormData}
          />
          {errors.firstName && <p id="error">{errors.firstName.message}</p>}
        </label>

        <label>
          Last Name
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={updateFormData}
          />
          {errors.lastName && <p id="error">{errors.lastName.message}</p>}
        </label>


       <label>
          User Name
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={updateFormData}
          />
          {errors.userName && <p id="error">{errors.userName.message}</p>}
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={updateFormData}
          />
          {errors.email && <p id="error">{errors.email.message}</p>}
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={updateFormData}
          />
          {errors.password && <p id="error">{errors.password.message}</p>}
        </label>

        <label>
          Confirm Password
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={updateFormData}
          />
          {errors.confirmPassword && <p id="error">{errors.confirmPassword.message}</p>}
        </label>

        <label>
          Address
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={updateFormData}
          />
          {errors.address && <p id="error">{errors.address.message}</p>}
        </label>

        <label>
          City
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={updateFormData}
          />
          {errors.city && <p id="error">{errors.city.message}</p>}
        </label>

          
        <label>
          State
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={updateFormData}
          />
          {errors.state && <p id="error">{errors.state.message}</p>}
        </label>
        
        <label>
          Street
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={updateFormData}
          />
          {errors.street && <p id="error">{errors.street.message}</p>}
        </label>

        <label>
          Zip Code
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={updateFormData}
          />
          {errors.zipCode && <p id="error">{errors.zipCode.message}</p>}
        </label>


        
        <label>
          Phone Number
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={updateFormData}
          />
          {errors.phone&& <p id="error">{errors.phone.message}</p>}
        </label>

        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default UserLogin;
