import { useRoutes } from "react-router-dom";

// import Booking from "./Pages/BookingPage/Booking";
// import Information from "./Pages/Information/Information";
import FlightResults from "./Pages/FlightResults/FlightResults";
import Homepage from "./Pages/HomePage/HomePage";
import BookingUserInfo from "./Pages/BookingUserInfo/BookingUserInfo";
import SearchResults from "./Pages/SearchResult/SearchResults";

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
  ]);
  return routeElement;
}
