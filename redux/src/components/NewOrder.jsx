import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const NewOrder = () => {
  const [geter, setGeter] = useState([]);
  const [name] = useParams();
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get("http://localhost:8080/orders", {
        params: {
          owner_name: name,
        },
      })
      .then(function (response) {
        console.log(response.data);
        setGeter(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };
  return (
    <div>
      <div className="form">
        <input
          className="new-problem"
          type="text"
          name="problem"
          placeholder="Enter problem"
        />
        {/* This input is readonly, it's coming from redux */}
        <input
          className="owner-name"
          type="text"
          name="owner_name"
          placeholder="yourname"
          readOnly
        />
        <input
          className="brand"
          type="text"
          name="brand"
          placeholder="Enter brand name"
        />
        {/* Create new problem, show it in below form immediately */}
        <button className="submit">submit</button>
      </div>

      <div className="pastOrders">
        {/* this button filters the data below. */}
        {/* it's just a toggle of redux state something like `showUnfinished`  */}
        <button className="filter">
          {/* Text should change like:   Show {showUnfinished ? "all" : "Only unfinished"} */}
        </button>

        {/* Here create a div for every oreder, filter them before based on `showUnfinished` */}
        <div className="past-orders">
          <span className="id"></span>. <span className="problem"></span>{" "}
          <span className="cost">
            {/* if status is not accepted then keep it empty otherwise show cost like $1234 */}
          </span>
          <p className="status">Status: </p>
          <hr />
        </div>
      </div>
    </div>
  );
};
