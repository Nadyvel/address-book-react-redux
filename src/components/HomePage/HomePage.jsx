import React, { useEffect, useState } from "react";
import "../../../src/scss/HomePage.scss";
import { connect } from "react-redux";
import UserCardModal from "../UserCardModal/UserCardModal";
import SearchBar from "../SearchBar/SearchBar";
import Svg from "../Icons/Svg";
import { Link } from "react-router-dom";

const HomePage = ({ nationalities }) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [results, setItems] = useState([]);
  const [searchVal, setSearch] = useState("");
  const [modalData, setModalData] = useState({
    data: {},
    showModal: false,
  });

  const USERS_PER_LOAD = 50;

  // load users
  const loadUsers = (amount) => {
    setIsLoaded(false);

    fetch(
      `https://randomuser.me/api/?results=${amount}&nat=${nationalities
        .map((item) => item.toUpperCase())
        .join(",")}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems((state) => [...state, ...result.results]);
        },
        (error) => {
          setIsLoaded(true);
          // throw new Error(error)
          setError(error);
        }
      );
  };

  // load first users
  useEffect(() => {
    loadUsers(USERS_PER_LOAD);
  }, []);

  // load users on Scroll
  const handleScroll = () => {
    if (
      window.scrollY >
        document.body.offsetHeight - (window.innerHeight * 1.2).toFixed(0) &&
      isLoaded
    ) {
      loadUsers(USERS_PER_LOAD);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoaded]);

  // filter users by search input
  const filteredResults = results.filter(
    (item) =>
      item.name.first.includes(searchVal) || item.name.last.includes(searchVal)
  );

  // Modal
  const closeModal = () => {
    setModalData((state) => ({
      ...state,
      showModal: false,
    }));
  };

  const openModal = ({ nat, picture, name, email, login }) => {
    setModalData((state) => ({
      ...state,
      showModal: true,
      data: {
        nat,
        picture,
        name,
        email,
        login,
      },
    }));
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <div className="main-container">
        <div className="toolbar">
          <SearchBar setSearch={setSearch} searchVal={searchVal} />

          <Link to="/settings">
            <Svg.Settings className="settings-btn" />
          </Link>
        </div>

        {filteredResults.map((item, index) => (
          <div
            key={index}
            className="rows-container"
            onClick={() => {
              openModal(item);
            }}
          >
            <div className="content-container">{item.nat}</div>
            <div className="content-container">
              <img src={item.picture.thumbnail} alt="user pic" />
            </div>
            <div className="content-container">{item.name.last}</div>
            <div className="content-container">{item.name.first}</div>
            <div className="content-container">{item.email}</div>
            <div className="content-container">{item.login.username}</div>
          </div>
        ))}

        {!isLoaded && <div>Loading...</div>}

        {modalData.showModal && (
          <UserCardModal data={modalData.data} onClose={closeModal} />
        )}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    nationalities: state.nationalityReducer,
  };
};

export default connect(mapStateToProps)(HomePage);
