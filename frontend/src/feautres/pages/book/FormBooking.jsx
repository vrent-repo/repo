/* eslint-disable react/prop-types */
/* eslint-disable react/no-children-prop */
import { useContext, useEffect, useState } from "react";
import PickDate from "../../components/book/PickDate";
import PickLocation from "../../components/book/PickLocation";
import SelectCar from "../../components/book/SelectCar";
import { Modal } from "flowbite-react";
import user from "../../../assets/icons/icon-user.png";
import mail from "../../../assets/icons/icon-mail-form.png";
import calendar from "../../../assets/icons/icon-calendar.png";
import location from "../../../assets/icons/icon-location.png";
import innova from "../../../assets/images/innova.png";
import rush from "../../../assets/images/rush.png";
import brio from "../../../assets/images/brio.png";
import hiace from "../../../assets/images/hiace.png";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../../context/UserContext";
import jwt_decode from "jwt-decode";

const FormBooking = () => {
  const [openModal, setOpenModal] = useState(null);
  const props = { openModal, setOpenModal };
  const [selectedCar, setSelectedCar] = useState();
  const [carId, setCarId] = useState(1);
  const [datePickUp, setDatePickUp] = useState();
  const [datePickOff, setDatePickOff] = useState();
  const [timePickUp, setTimePickUp] = useState();
  const [timePickOff, setTimePickOff] = useState();
  const [saveLocationPick, setSaveLocationPick] = useState();
  const [saveLocationOff, setSaveLocationOff] = useState();
  const [price, setPrice] = useState();
  const {token} = useContext(UserContext);
  const [msg, setMsg] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3003/api/cars/${carId}`).then((data) => {
        setPrice(data.data.data[0].price);
    });
  }, [carId]);

  const handleSearch = (e) => {
    const decode = jwt_decode(token);

    setName(decode.name);
    setEmail(decode.email);

    e.preventDefault();
    if (token === undefined) {
      Swal.fire({
        title: "You have to login to book a car!",
        showCancelButton: true,
        confirmButtonText: "Login",
        confirmButtonColor: "#C05F31",
        cancelButtonColor: "black",
        icon: "warning",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    } else {
      props.setOpenModal("default");
    }
  };

  const handleOnClickReserve = async (e) => {
    e.preventDefault();
    try {
      await axios
      .post(`http://localhost:3003/api/transactions/create`, {
        car_id: carId,
        pickup_date: datePickUp,
        pickoff_date: datePickOff,
        pickup_location: saveLocationPick,
        pickoff_location: saveLocationOff,
        pickup_time: timePickUp,
        pickoff_time: timePickOff,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      )
      .then((res) => {
        console.log(res);
      });

    props.setOpenModal(undefined);

    setTimeout(() => {
      Swal.fire({
        icon: "success",
        title: "See your mail for order details",
        confirmButtonColor: "#C05F31",
      });
    }, 200);
    } catch (error) {
      setMsg(error.response.data.message);

      Swal.fire({
        title: msg,
        confirmButtonColor: "#C05F31",
        icon: "warning",
      })
    }
  };

  return (
    <div className="mt-5 mb-10">
      <h1 className="text-2xl font-semibold mb-4 md:-translate-x-10">
        Search and Book Car
      </h1>
      <form
        onSubmit={handleSearch}
        className="flex flex-col gap-7 border border-black rounded p-10"
      >
        {/* Select car */}
        <SelectCar setCarId={setCarId} setCar={setSelectedCar} />

        {/* Pick up & pick 0ff date */}
        <div className="flex flex-col md:flex-row gap-5">
          <PickDate setDate={setDatePickUp} children={"Pick-up Date"} />
          <PickDate setDate={setDatePickOff} children={"Pick-off Date"} />
        </div>

        {/* Pick up & pick off location */}
        <div className="flex flex-col md:flex-row gap-5">
          <PickLocation
            setSaveLocation={setSaveLocationPick}
            children={"Pick-up Location"}
            defaultOption={"Select pick up location"}
          />
          <PickLocation
            setSaveLocation={setSaveLocationOff}
            children={"Pick-off Location"}
            defaultOption={"Select pick off location"}
          />
        </div>

        <button
          type="submit"
          className="text-xl text-white w-full lg:w-[49%] h-11 rounded bg-primary shadow-md hover:brightness-90"
        >
          Search
        </button>
      </form>

      {/* Modal when form submitted */}
      <Modal
        className="h-full"
        show={props.openModal === "default"}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header className="h-16 bg-primary text-white">
          CONFIRM RESERVATION
        </Modal.Header>
        <Modal.Body className="bg-white">
          <div className="space-y-2 mb-4">
            <h2 className="text-lg font-semibold">Renter</h2>
            <ul className="text-grey-text flex flex-col gap-2">
              <li className="flex items-center gap-4">
                <img className="w-4" src={user} alt="icon-user" />
                <span>{name}</span>
              </li>
              <li className="flex items-center gap-4">
                <img className="w-4" src={mail} alt="icon-mail" />
                <span>{email}</span>
              </li>
            </ul>
          </div>

          <hr />

          <div className="w-full flex flex-col md:flex-row my-4 gap-10 md:gap-24">
            <ul className="flex flex-col gap-5 lg:gap-2">
              <li className="text-lg font-semibold mb-2">Location & Date</li>
              <li className="flex gap-2">
                <img
                  className="max-w-4 max-h-4 translate-y-1location"
                  src={calendar}
                  alt=""
                />
                <div className="flex flex-col gap">
                  <p className="text-sm font-medium">Pick-Up Date & Time</p>
                  <div className="flex justify-between gap-4 items-center text-sm text-grey-text">
                    <span>{datePickUp}</span>
                    <input
                      onChange={(e) => setTimePickUp(e.target.value)}
                      type="time"
                      className="border border-black focus:outline-none px-1 rounded"
                      required
                    />
                  </div>
                </div>
              </li>
              <li className="flex gap-2">
                <img
                  className="max-w-4 max-h-4 translate-y-1"
                  src={calendar}
                  alt=""
                />
                <div className="flex flex-col gap">
                  <p className="text-sm font-medium">Pick-Off Date & Time</p>
                  <div className="flex justify-between gap-4 items-center text-sm text-grey-text">
                    <span>{datePickOff}</span>
                    <input
                      required
                      onChange={(e) => setTimePickOff(e.target.value)}
                      type="time"
                      className="border border-black focus:outline-none px-1 rounded"
                    />
                  </div>
                </div>
              </li>
              <li className="flex gap-2">
                <img
                  className="max-w-4 max-h-4 translate-y-1"
                  src={location}
                  alt=""
                />
                <div className="flex flex-col gap">
                  <p className="text-sm font-medium">Pick-Up Location</p>
                  <div className="flex justify-between items-center text-sm text-grey-text">
                    <span>{saveLocationPick}</span>
                  </div>
                </div>
              </li>
              <li className="flex gap-2">
                <img
                  className="max-w-4 max-h-4 translate-y-1"
                  src={location}
                  alt=""
                />
                <div className="flex flex-col gap">
                  <p className="text-sm font-medium">Pick-Off Location</p>
                  <div className="flex justify-between items-center text-sm text-grey-text">
                    <span>{saveLocationOff}</span>
                  </div>
                </div>
              </li>
            </ul>

            <div className="h-full">
              <h2 className="text-lg font-semibold mb-5 md:mb-2">
                Car - <span className="text-grey-text">{selectedCar}</span>
              </h2>
              <div className="w-60 h-full flex items-center py-4">
                <img
                  src={
                    selectedCar === "Innova"
                      ? innova
                      : selectedCar === "Rush"
                      ? rush
                      : selectedCar === "Hiace"
                      ? hiace
                      : selectedCar === "brio"
                      ? brio
                      : ""
                  }
                  alt=""
                />
              </div>
              <h2 className=" text-lg font-semibold">
                Cost : <span className="text-grey-text">Rp {price} /day</span>
              </h2>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="h-20 bg-white">
          <div className="w-full flex justify-end">
            <button
              onClick={handleOnClickReserve}
              className="text-xl text-white py-2 px-8 rounded bg-primary shadow-md hover:brightness-90"
            >
              Reserve Now
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FormBooking;
