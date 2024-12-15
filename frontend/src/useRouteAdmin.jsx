import { useRoutes } from "react-router-dom";
import HomeAdmin from "./AdminPages/HomeAdmin/HomeAdmin"
import AircraftInfo from "./AdminPages/AircraftInfo/AircraftInfo";
import FlightInfo from "./AdminPages/FlightInfo/FlightInfo";
import Posts from "./AdminPages/Posts/Posts";

export default function useRouteElement() {
    const routeAdmin = useRoutes([
        {
            path: "/",
            element: <HomeAdmin />,
        },
        {
            path: "/AircraftInfo",
            element: <AircraftInfo />,
        },
        {
            path: "/FlightInfo",
            element: <FlightInfo />,
        },
        {
            path: "/Posts",
            element: <Posts />,
        },
    ]);
    return routeAdmin;
}