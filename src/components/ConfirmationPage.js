import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "../styles/ConfirmationPage.css";
import useAppContext from "../hooks/useAppContext";

function ConfirmationPage() {
  //inicia o navigate method
  const navigate = useNavigate();
  //funcao que chama o navigation method e define pra onde vai navegar
  const cancel = () => {
    navigate("/reservation");
    state.user = '';
    state.phoneNumber = '';
    state.selectedDate = '';
    state.selectedTime = '';
    state.selectedGuests = '';
    state.selectedOccasion = '';
    state.instructions = '';
    alert(
      "Sua reserva sera cancelada e voce sera redirecionado para a tela de reservas"
    );
  };

  //Contexto
  const { state} = useAppContext();

  return (
    <div className="confirmation">
      <div className="confirmation-header">
        <h3>PLEASE CONFIRM YOUR DATA</h3>
        <p>{state.user} This is your confirmation information</p>
      </div>
      <div className="book-container">
        <p className="cp-left-side">Name</p>
        <p className="cp-right-side">{state.user}</p>
        <p className="cp-left-side">Phone number</p>
        <p className="cp-right-side"> {state.phoneNumber}</p>
        <p className="cp-left-side">Date</p>
        <p className="cp-right-side">{state.selectedDate}</p>
        <p className="cp-left-side">Time</p>
        <p className="cp-right-side">{state.selectedTime}</p>
        <p className="cp-left-side">Number of Guests</p>
        <p className="cp-right-side">{state.selectedGuests}</p>
        <p className="cp-left-side">Occasion</p>
        <p className="cp-right-side">{state.selectedOccasion}</p>
        <p className="cp-left-side">Special Instructions</p>
        <p className="cp-right-side">{state.instructions}</p>
      </div>
      <div className="cp-button-container">
        <p>Are you sure you want to proceed?</p>
        <button type="submit" id="submit" className="button black">
          Reserve a Table
        </button>
        <button id="cancel" className="button black" onClick={cancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ConfirmationPage;
