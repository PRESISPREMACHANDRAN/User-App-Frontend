import React, { useState } from "react";
import Header from "./Header";

const AddData = () => {
  const [input, changeInput] = useState({
    id: "",
    firstName: "",
    lastName: "",
    maidenName: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    birthDate: "",
    image: "",
    bloodGroup: "",
    height: "",
    weight: "",
    eyeColor: "",
    hair_color: "",
    hair_type: "",
    domain: "",
    ip: "",
    address: "",
    city: "",
    coordinates_lat: "",
    coordinates_lng: "",
    postalCode: "",
    state: "",
    macAddress: "",
    university: "",
    cardExpire: "",
    cardNumber: "",
    cardType: "",
    currency: "",
    iban: "",
    company_address: "",
    company_address_city: "",
    company_address_coordinates_lat: "",
    company_address_coordinates_lng: "",
    company_address__postalCode: "",
    company_address_state: "",
    company_department: "",
    company_name: "",
    company_title: "",
    ein: "",
    ssn: "",
    userAgent: "",
    crypto_coin: "",
    crypto_wallet: "",
    crypto_network: "",
  });

  const readValue=(e)=>{
    changeInput({...input,[e.target.name]:e.target.value})
  }

  const submitValue=()=>{
    console.log(input)
  }


  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  ID
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="id"
                  value={input.id}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  value={input.firstName}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  value={input.lastName}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  maiden Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="maidenName"
                  value={input.maidenName}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  Age
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="age"
                  value={input.age}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  Gender
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="gender"
                  value={input.gender}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  email
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  value={input.email}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={input.phone}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  username
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={input.username}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  password
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="password"
                  value={input.password}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  birthDate
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="birthDate"
                  value={input.birthDate}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  image
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="image"
                  value={input.image}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  bloodGroup
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="bloodGroup"
                  value={input.bloodGroup}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  height
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="height"
                  value={input.height}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  weight
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="weight"
                  value={input.weight}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  eyeColor
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="eyeColor"
                  value={input.eyeColor}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  hair color
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="hair_color"
                  value={input.hair_color}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  hair type
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="hair_type"
                  value={input.hair_type}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  domain
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="domain"
                  value={input.domain}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  ip
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="ip"
                  value={input.ip}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  address
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={input.address}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  city
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  value={input.city}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  coordinates latitude
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="coordinates_lat"
                  value={input.coordinates_lat}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  coordinates longitude
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="coordinates_lng"
                  value={input.coordinates_lng}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  postalCode
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="postalCode"
                  value={input.postalCode}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  state.
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="state"
                  value={input.state}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  mac address
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="macAddress"
                  value={input.macAddress}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  university
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="university"
                  value={input.university}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  cardExpire
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="cardExpire"
                  value={input.cardExpire}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  cardNumber
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="cardNumber"
                  value={input.cardNumber}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  cardType
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="cardType"
                  value={input.cardType}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  currency
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="currency"
                  value={input.currency}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  iban
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="iban"
                  value={input.iban}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  company address
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="company_address"
                  value={input.company_address}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  company city
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="company_address_city"
                  value={input.company_address_city}
                  onChange={readValue}
                />
              </div>

              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  COMPANY ADDRESS COORDINATES LATITUDE
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="company_address_coordinates_lat"
                  value={input.company_address_coordinates_lat}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  COMPANY ADDRESS COORDINATES LONGITUDE
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="company_address_coordinates_lng"
                  value={input.company_address_coordinates_lng}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  COMPANY ADDRESS POSTCODE
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="company_address__postalCode"
                  value={input.company_address__postalCode}
                  onChange={readValue}
                />
              </div>

              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  COMPANY ADDRESS STATE
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="company_address_state"
                  value={input.company_address_state}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  COMPANY DEPARTMENT
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="company_department"
                  value={input.company_department}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  COMPANY NAME
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="company_name"
                  value={input.company_name}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  COMPANY TITLE
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="company_title"
                  value={input.company_title}
                  onChange={readValue}
                />
              </div>

              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  ein
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="ein"
                  value={input.ein}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  ssn
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="ssn"
                  value={input.ssn}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  user agent
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="userAgent"
                  value={input.userAgent}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  crypto_coin
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="crypto_coin"
                  value={input.crypto_coin}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  crypto__wallet
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="crypto_wallet"
                  value={input.crypto_wallet}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  crypto_network
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="crypto_network"
                  value={input.crypto_network}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={submitValue}>
                  ADD
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddData;
