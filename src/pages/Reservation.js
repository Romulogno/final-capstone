import '../styles/Reservation.css'
import ReservationImage from "../components/ReservationImage";
import BookForm from "../components/Bookform";

 //Use context test


function Reservation () {
    return (
            <div className="reservation">
                <ReservationImage/>
                <BookForm />
            </div>
    );
};

export default Reservation;
