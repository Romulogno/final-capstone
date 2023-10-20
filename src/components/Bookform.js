import { fetchAPI, submitAPI } from "../helpers/BookingAPI";
import { useNavigate } from "react-router-dom";
import useAppContext from "../hooks/useAppContext";
import "../styles/Bookform.css";

function BookForm() {
  //usecontex child that gets the data from the AppProvider
  const {
    state,
    dispach,
    selectedDate,
    selectedGuests,
    selectedOccasion,
    selectedTime,
  } = useAppContext();

  //inicia o navigate method
  const navigate = useNavigate();
  //funcao que chama o navigation method e define pra onde vai navegar

  // submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      selectedDate,
      selectedTime,
      selectedGuests,
      selectedOccasion,
    };

    const res = submitAPI(formData);

    if (res) {
      navigate("./ConfirmationPage");
      console.log("Deu bom e navega pro confirmation page");
    }

    console.log("Form enviado com sucesso");
    console.log("data: " + state.selectedDate);
    console.log("times available: " + state.availableTimesContext);
    console.log("Time escolhido: " + state.selectedTime);
    console.log("numero de guests: " + state.selectedGuests);
    console.log("occasion escolhida: " + state.selectedOccasion);
  };

  return (
    <div className="bookform">
      <form onSubmit={handleSubmit}>
        <div className="bookform-container">
          <h1 className="bookform-header">Book your table {state.user}</h1>
          <label className="bf-left-side" htmlFor="res-user">
            User Name: {state.user}
          </label>
          <input
            className="bf-right-side"
            type="text"
            id="res-user"
            onChange={(e) => {
              dispach({
                type: "setUser",
                payload: e.target.value,
              });
            }}
          />
          <label className="bf-left-side" htmlFor="res-phone">
            Phone {state.phoneNumber}
          </label>
          <input
            className="bf-right-side"
            type="tel"
            id="res-phone"
            pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
            placeholder="000 000 000"
            onChange={(e) => {
              dispach({
                type: "setPhoneNumber",
                payload: e.target.value,
              });
            }}
          />
          <label className="bf-left-side" htmlFor="res-date">
            Chose Date: {state.selectedDate}
          </label>
          <input
            className="bf-right-side"
            type="date"
            id="res-date"
            onChange={(e) => {
              dispach({
                type: "setSelectedDate",
                payload: e.target.value,
              });
            }}
          />
          <label className="bf-left-side" htmlFor="res-time">
            Chose Time{state.selectedTime}
          </label>
          {/* So pegar o que vai ser exibido na tela, pegar da variavel que fica no app */}
          <select
            className="bf-right-side"
            data-testid="select-test"
            id="res-time"
            name="times"
            type="select"
            onChange={(e) => {
              dispach({
                type: "setSelectedTime",
                payload: e.target.value,
              });
            }}
          >
            {state.availableTimesContext.map((time, key) => {
              return (
                <option key={key} value={time}>
                  {time}
                </option>
              );
            })}
          </select>
          <label className="bf-left-side" htmlFor="guests">
            Number of Guests: {state.selectedGuests}
          </label>
          <input
            className="bf-right-side"
            type="number"
            id="guests"
            placeholder="1"
            min="1"
            max="10"
            value={selectedGuests}
            onChange={(e) => {
              dispach({
                type: "setSelectedGuests",
                payload: e.target.value,
              });
            }}
          />
          <label className="bf-left-side" htmlFor="occasion">
            Occasion: {state.selectedOccasion}
          </label>
          <select
            className="bf-right-side"
            value={selectedOccasion}
            onChange={(e) => {
              dispach({
                type: "setSelectedOccasion",
                payload: e.target.value,
              });
            }}
          >
            <option>Select Occasion</option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <label className="bf-left-side" htmlFor="res-instructions">
            Special Instructions:{state.instructions}
          </label>
          <input
            className="bf-right-side"
            type="text"
            id="res-instructions"
            onChange={(e) => {
              dispach({
                type: "setInstructions",
                payload: e.target.value,
              });
            }}
          />
          <input
            className="bookform-submit button yellow"
            type="submit"
            value="SUBMIT"
          />
        </div>
      </form>
    </div>
  );
}

export default BookForm;
