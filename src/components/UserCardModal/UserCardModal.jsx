import React from "react";
import Modal from "../shared/Modal.jsx";

const UserCardModal = ({ data, onClose }) => (
  <Modal close={onClose}>
    <div className="modal-container">
      <div className="detail-container">
        <div className="content-container">{data.nat}</div>
        <div className="content-container">
          <img src={data.picture.thumbnail} alt="user pic" />
        </div>
        <div className="content-container">{data.name.last}</div>
        <div className="content-container">{data.name.first}</div>
        <div className="content-container">{data.email}</div>
        <div className="content-container">{data.login.username}</div>
      </div>
    </div>
  </Modal>
);

export default UserCardModal;
