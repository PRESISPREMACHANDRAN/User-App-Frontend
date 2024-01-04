import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";

const ViewAll = () => {
  const [userData, changeUserData] = useState({
users:[],
    total: 100,
    skip: 0,
    limit: 30,
  });

  const fetchData=()=>{
axios.get("https://dummyjson.com/users")
.then(
  (response)=>{
    changeUserData(response.data)
  }
)
  }
  useEffect(()=>{fetchData()},[])
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">firstName</th>
                      <th scope="col">lastName</th>
                      <th scope="col">maidenName</th>
                      <th scope="col">age</th>
                      <th scope="col">GENDER</th>
                      <th scope="col">email</th>
                      <th scope="col">phone</th>
                      <th scope="col">username</th>
                      <th scope="col">password</th>
                      <th scope="col">birth date</th>
                      <th scope="col">image</th>
                      <th scope="col">Blood group</th>
                      <th scope="col">height</th>
                      <th scope="col">weight</th>
                      <th scope="col">eye color</th>
                      <th scope="col">hair color</th>
                      <th scope="col">hair type</th>
                      <th scope="col">domain</th>
                      <th scope="col">ip</th>
                      <th scope="col">address</th>
                      <th scope="col">city</th>
                      <th scope="col">coordinates.lat</th>
                      <th scope="col">coordinates.lng</th>
                      <th scope="col">postalCode</th>
                      <th scope="col">state.</th>
                      <th scope="col">macAddress</th>
                      <th scope="col">university</th>
                      <th scope="col">cardExpire</th>
                      <th scope="col">cardNumber</th>
                      <th scope="col">cardType</th>
                      <th scope="col">currency</th>
                      <th scope="col">iban</th>
                      <th scope="col">company.address.address</th>
                      <th scope="col">company.address.city</th>
                      <th scope="col">company.address.coordinates.lat</th>
                      <th scope="col">company.address.coordinates.lng</th>
                      <th scope="col">company.address.postalcode</th>
                      <th scope="col">company.address.state</th>
                      <th scope="col">company.department</th>
                      <th scope="col">company.name</th>
                      <th scope="col">company.title</th>
                      <th scope="col">ein</th>
                      <th scope="col">ssn</th>
                      <th scope="col">useragent</th>
                      <th scope="col">crypto_coin</th>
                      <th scope="col">crypto__wallet</th>
                      <th scope="col">crypto_network</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userData.users.map((value, index) => {
                      return (
                        <tr>
                          <th scope="row">{value.id}</th>
                          <td>{value.firstName}</td>
                          <td>{value.lastName}</td>
                          <td>{value.maidenName}</td>
                          <td>{value.age}</td>
                          <td>{value.gender}</td>
                          <td>{value.email}</td>
                          <td>{value.phone}</td>
                          <td>{value.username}</td>
                          <td>{value.password}</td>
                          <td>{value.birthDate}</td>

                          <td>
                            {" "}
                            <img src={value.image} alt="imag" />
                          </td>
                          <td>{value.bloodGroup}</td>
                          <td>{value.height}</td>
                          <td>{value.weight}</td>
                          <td>{value.eyeColor}</td>
                          <td>{value.hair.color}</td>
                          <td>{value.hair.type}</td>
                          <td>{value.domain}</td>
                          <td>{value.ip}</td>
                          <td>{value.address.address}</td>
                          <td>{value.address.city}</td>
                          <td>{value.address.coordinates.lat}</td>
                          <td>{value.address.coordinates.lng}</td>
                          <td>{value.address.postalCode}</td>
                          <td>{value.address.state}</td>
                          <td>{value.macAddress}</td>
                          <td>{value.university}</td>
                          <td>{value.bank.cardExpire}</td>
                          <td>{value.bank.cardNumber}</td>
                          <td>{value.bank.cardType}</td>
                          <td>{value.bank.currency}</td>
                          <td>{value.bank.iban}</td>
                          <td>{value.company.address.address}</td>
                          <td>{value.company.address.city}</td>
                          <td>{value.company.address.coordinates.lat}</td>
                          <td>{value.company.address.coordinates.lng}</td>
                          <td>{value.company.address.postalCode}</td>
                          <td>{value.company.address.state}</td>
                          <td>{value.company.department}</td>
                          <td>{value.company.name}</td>
                          <td>{value.company.title}</td>
                          <td>{value.ein}</td>
                          <td>{value.ssn}</td>
                          <td>{value.userAgent}</td>
                          <td>{value.crypto.coin}</td>
                          <td>{value.crypto.wallet}</td>
                          <td>{value.crypto.network}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAll;
