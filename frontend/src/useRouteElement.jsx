import { useRoutes } from "react-router-dom";

// import Booking from "./Pages/BookingPage/Booking";
// import Information from "./Pages/Information/Information";
import FlightResults from "./Pages/FlightResults/FlightResults";
import Homepage from "./Pages/HomePage/HomePage";
import BookingUserInfo from "./Pages/BookingUserInfo/BookingUserInfo";
import SearchResults from "./Pages/SearchResult/SearchResults";
import FlightInfo from "./Pages/FlightInfo/FlightInfo";
import CancelFlight from "./Pages/CancelFlight/CancelFlight";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import ForgotPW from "./Pages/RegisterPage/ForgotPW";

export default function useRouteElement() {
  const routeElement = useRoutes([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/FlightResults",
      element: <FlightResults />,
    },

    {
      path: "/BookingUserInfo",
      element: <BookingUserInfo />,
    },
    {
      path: "/SearchResults",
      element: <SearchResults />,
    },
    {
      path: "/FlightInfo",
      element: <FlightInfo />,
    },
    {
      path: "/CancelFlight",
      element: <CancelFlight />,
    },
    {
      path: "/LoginPage",
      element: <LoginPage />,
    },
    {
      path: "/RegisterPage",
      element: <RegisterPage />,
    },
    {
      path: "/ForgotPW",
      element: <ForgotPW />,
    },
  ]);
  return routeElement;
}
