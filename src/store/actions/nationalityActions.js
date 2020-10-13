export const SET_NATIONALITY = "SET_NATIONALITY";
export const UNSET_NATIONALITY = "UNSET_NATIONALITY";

const setNationality = (nat) => ({
  type: SET_NATIONALITY,
  payload: nat
});

const unsetNationality = (nat) => ({
  type: UNSET_NATIONALITY,
  payload: nat,
});

export default {
  setNationality: setNationality,
  unsetNationality: unsetNationality,
}