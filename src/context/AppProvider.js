//AppProvider has the use context and the useReducer hooks
//Provides all the data necessary

import { AppContextState } from "./AppContext";
import { useReducer } from "react";

//useReducer cases
const reducer = (state, action) => {
  switch (action.type) {
    case "setSelectedGuests":
      return {
        ...state,
        selectedGuests: action.payload,
      };
    case "setUser":
      return {
        ...state,
        user: action.payload,
      };
    case "setPhoneNumber":
      return {
        ...state,
        phoneNumber: action.payload,
      };
    case "setSelectedDate":
      return {
        ...state,
        selectedDate: action.payload,
      };
    case "setSelectedTime":
      return {
        ...state,
        selectedTime: action.payload,
      };
    case "setSelectedOccasion":
      return {
        ...state,
        selectedOccasion: action.payload,
      };
    case "setInstructions":
      return {
        ...state,
        instructions: action.payload,
      };
    default:
      return state;
  }
};

export default function AppProvider({ children }) {
  // All my inicial state of Use Reducer

  //useReducer
  const [state, dispach] = useReducer(reducer, {
    //states I want to add
    user: "",
    phoneNumber: "",
    selectedDate: "",
    selectedTime: "",
    selectedGuests: 0,
    selectedOccasion: "",
    instructions: "",
    availableTimesContext: [
        "Select your time",
        "20:00",
        "21:00",
        "22:00",
        "23:00",
        "00:00",
      ]
  });

  return (
    <AppContextState.Provider value={{ state, dispach }}>
      {children}
    </AppContextState.Provider>
  );
}
