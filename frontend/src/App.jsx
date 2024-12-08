import "./App.css";
import { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import useRouteElement from "./useRouteElement";
import Navbar from "./CommonComponents/Navbar";
import Footer from "./CommonComponents/Footer";
import HomePage from "./Pages/HomePage/HomePage";
import { smoothScrollTo } from "./CommonFunctions/SmoothScroll";
import LoginPage from "./Pages/LoginPage/LoginPage";

function App() {
  const routeElement = useRouteElement();
  const navigate = useNavigate();
  const isHomePage = routeElement.props.children.type === HomePage;
  const isLoginPage = routeElement.props.children.type === LoginPage;

  const flightSearchRef = useRef(null);
  const handleScrollToFlightSearch = () => {
    if (flightSearchRef.current) {
      smoothScrollTo(flightSearchRef);
    }
  };

  const handleNavbarSearchClick = () => {
    if (isHomePage) {
      handleScrollToFlightSearch();
    } else {
      // Điều hướng đến HomePage và cuộn xuống
      navigate("/", { state: { scrollToFlightSearch: true } });
    }
  };

  return (
    <div>
        <Navbar onSearchClick={handleNavbarSearchClick} />
        {isHomePage ? <HomePage flightSearchRef={flightSearchRef} /> : routeElement}
        <Footer />
    </div>
  );
}

export default App;
