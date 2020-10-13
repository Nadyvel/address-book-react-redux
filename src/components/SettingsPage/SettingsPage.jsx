import React from "react";
import "../../../src/scss/SettingsPage.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import nationalityActions from "../../store/actions/nationalityActions";
import CheckBox from "./Checkbox";

const POSSIBLE_NATIONALITIES = ["es", "gb", "ch", "fr"];

const SettingsPage = ({ nationalities, onClick }) => (
  <div>
    <div className="goBackBtn">
      <Link to="/">Home</Link>
    </div>

    <div className="check-container">
      {POSSIBLE_NATIONALITIES.map((item, index) => (
        <CheckBox
          key={index}
          nationality={item}
          nationalities={nationalities}
          onClick={onClick}
        />
      ))}
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    nationalities: state.nationalityReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (nat, isChecked) => {
      isChecked
        ? dispatch(nationalityActions.unsetNationality(nat))
        : dispatch(nationalityActions.setNationality(nat));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
