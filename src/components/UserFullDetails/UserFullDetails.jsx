import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faStreetView,
  faPhone,
  faCity,
  faHouse,
  faMailBulk,
  faBuilding,
  faSignature,
  faFileSignature,
} from "@fortawesome/free-solid-svg-icons";

import "./userFullDetails.css";

export const UserFullDetails = () => {
  const { users } = useSelector((state) => state.users);
  const { id } = useParams();

  function filterUsers() {
    return users.find((item) => item.id == id);
  }

  const user = useMemo(() => filterUsers(), [id, users]);

  if (!user) {
    return <h5>User has not been selected yet</h5>;
  }

  return (
    <div className="user-full-details">
      <h3>User full details</h3>
      <ul className="full-details-list">
        <li className="full-details-item">
          <FontAwesomeIcon icon={faSignature} /> Name: {user.text}
        </li>
        <li className="full-details-item">
          <FontAwesomeIcon icon={faFileSignature} /> Nickame: {user.username}
        </li>
        <li className="full-details-item">
          <FontAwesomeIcon icon={faEnvelope} /> Email: {user.email}
        </li>
        <li className="full-details-item">
          <FontAwesomeIcon icon={faPhone} /> Phone number: {user.phone}
        </li>
        <li className="full-details-item">
          <FontAwesomeIcon icon={faCity} /> City: {user.address.city}
        </li>
        <li className="full-details-item">
          <FontAwesomeIcon icon={faStreetView} /> Street: {user.address.street}
        </li>
        <li className="full-details-item">
          <FontAwesomeIcon icon={faHouse} /> Suite: {user.address.suite}
        </li>
        <li className="full-details-item">
          <FontAwesomeIcon icon={faMailBulk} /> Zipcode: {user.address.zipcode}
        </li>
        <li className="full-details-item">
          <FontAwesomeIcon icon={faBuilding} /> Company: {user.company.name}
        </li>
      </ul>
    </div>
  );
};
