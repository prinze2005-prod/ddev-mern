import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer } from "./components";

import { Home, About } from "./pages";

import LoginPage from "./pages/login/LoginPage";
import ServicePage from "./pages/client/service/ServicePage";
import SignupPage from "./pages/signup/SignupPage";
import TechLandingPage from "./pages/tech/TechLandingPage";
import PaintingPage from "./components/PaintingPage";
import Plumbing from "./components/Plumbing";
import Electrician from "./components/Electrician";
import Heating from "./components/Heating";
import Handyman from "./components/Handyman";
import Appliances from "./components/Appliances";
import BookPlumber from "./pages/client/booking/BookPlumber";
import BookElectrician from "./pages/client/booking/BookElectrician";
import BookPainter from "./pages/client/booking/BookPainter";
import BookHeatCool from "./pages/client/booking/BookHeatCool";
import BookHandyman from "./pages/client/booking/BookHandyman";
import BookAppliance from "./pages/client/booking/BookAppliance";
import BookingConfirmPage from "./components/BookingConfirmPage";
import ErrorPage from "./pages/errorPages/ErrorPage";
import ContactUs from "./pages/client/contact/ContactUs";
import Profile from "./pages/client/profile/Profile";
import TechPerformance from "./pages/tech/TechPerformance";
import TechTaskInProgress from "./pages/tech/TechTaskInProgress";
import CompletedTask from "./pages/tech/CompletedTask";
import PendingTasks from "./pages/tech/PendingTasks";
import ContactAdmin from "./pages/tech/ContactAdmin";
import TechProfile from "./pages/tech/TechProfile";
import AdminLandingPage from "./pages/admin/AdminLandingPage";
import AdminProfile from "./pages/admin/AdminProfile";
import AdminJobEdit from "./pages/admin/JobManager/AdminJobEdit";
import AdminTechEdit from "./pages/admin/TechManager/AdminTechEdit";
import AdminAddTech from "./pages/admin/TechManager/AdminAddTech";
import TestPage from "./pages/TestPage";
import AdminAddClient from "./pages/admin/ClientManager/AdminAddClient";
import AdminClientEdit from "./pages/admin/ClientManager/AdminClientEdit";
import ReviewInquires from "./pages/admin/ReviewInquires";
import AdminJob from "./pages/admin/JobManager/AdminJob";
import PastTransaction from "./pages/admin/PastTransaction";
import ManageTechPage from "./pages/admin/TechManager/ManageTechPage";
import ManageClient from "./pages/admin/ClientManager/ManageClient";
import NewNav from "./components/NewNav";
import PastTransactionDetail from "./pages/admin/PastTransactionDetail";
import ProtectedRoute from "./ProtectedRoute";

const { REACT_APP_API_ENDPOINT } = process.env;

function App() {
  let HP_refreshToken;
  let HP_accessToken;
  let HP_type;
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(null);

   useEffect(() => {
     try {
       var cookies = document.cookie.split(";");
       for (var i = 0; i < cookies.length; i++) {
         var cook = cookies[i].split("=");
         if (cook[0].includes("HP_refreshToken")) {
         HP_refreshToken = cook[1];
         }
         if (cook[0].includes("HP_accessToken")) {
           HP_accessToken = cook[1];
         }
         if (cook[0].includes("HP_type")) {
           HP_type = cook[1];
         }
       }
     fetch(REACT_APP_API_ENDPOINT +"/api/customer/getLoggedInInfo", {
       method: "POST",
       credentials: "include", //TWO THINGS: Cookies and this header <============
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({
         refreshToken: HP_refreshToken, // <==================== IN ALL REQUESTS THAT ARE CUSTOMER, TECH, and EMAIL!
         accessToken: HP_accessToken, // <====================== IN ALL REQUESTS THAT ARE CUSTOMER, TECH, and EMAIL!
       }),
     })
       .then((response) => response.json())
      if(HP_type === "Customer"){
       
         setIsAuth("Client");
       }else if(HP_type === "Tech"){
        
         setIsAuth("Tech");
        } else if(HP_type === "Admin"){
         
         setIsAuth("Admin");
        };
   }catch (err) {
     console.log(err);
   }}, []);
  

  React.useEffect(() => {
    // localStorage.getItem('user')
    // 1. token login
    // if success
    // setUser
  }, []);
  function handleLogout() {
    setUser(null);
    document.cookie = "HP_userEmail= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "HP_userFName= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "HP_userLName= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "HP_type= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie =
      "HP_refreshToken= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie =
      "HP_accessToken= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    window.location = "/";
  }

  return (
    <Router>
      <div>
        {/* <Navbar user={user} handleLogout={handleLogout} />
        <Sidebar user={user} handleLogout={handleLogout} /> */}
        <NewNav user={user} handleLogout={handleLogout}></NewNav>
        <div style={{ backgroundColor: "#FDFAF4", minHeight: "900px" }}>
          {" "}
          <Switch>
            <Route exact path="/">
              <Home user={user} />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/service">
              <ServicePage />
            </Route>
            <Route exact path="/login">
              <LoginPage setUser={setUser} />
            </Route>
            <Route exact path="/signup">
              <SignupPage />
            </Route>
            <Route exact path="/tech">
              <TechLandingPage />
            </Route>
            <Route exact path="/PaintingPage">
              <PaintingPage />
            </Route>
            <Route exact path="/Plumbing">
              <Plumbing />
            </Route>
            <Route exact path="/Electrician">
              <Electrician />
            </Route>
            <Route exact path="/Heating">
              <Heating />
            </Route>
            <Route exact path="/Handyman">
              <Handyman />
            </Route>
            <Route exact path="/Appliances">
              <Appliances />
            </Route>
            <Route exact path="/bookPlumber">
              <BookPlumber />
            </Route>
            <Route exact path="/bookElectrician">
              <BookElectrician />
            </Route>
            <Route exact path="/bookPainter">
              <BookPainter />
            </Route>
            <Route exact path="/bookHeatCool">
              <BookHeatCool />
            </Route>
            <Route exact path="/bookHandyman">
              <BookHandyman />
            </Route>
            <Route exact path="/bookAppliance">
              <BookAppliance />
            </Route>
            <Route exact path="/BookingConfirmPage">
              <BookingConfirmPage />
            </Route>
            <Route exact path="/ContactUs">
              <ContactUs />
            </Route>
            <Route exact path="/Profile">
              <Profile />
            </Route>
            {/* <ProtectedRoute path="/Profile" component={Profile} isAuth={isAuth}/>     */}
            <Route exact path="/techPerformance">
              <TechPerformance />
            </Route>
            <Route exact path="/techTaskInProgress">
              <TechTaskInProgress />
            </Route>
            <Route exact path="/CompletedTask">
              <CompletedTask />
            </Route>
            <Route exact path="/PendingTasks">
              <PendingTasks />
            </Route>
            <Route exact path="/contactAdmin">
              <ContactAdmin />
            </Route>
            <Route exact path="/techProfile">
              <TechProfile />
            </Route>
            <Route exact path="/admin">
              <AdminLandingPage />
            </Route>
            <Route exact path="/adminProfile">
              <AdminProfile></AdminProfile>
            </Route>
            <Route exact path="/adminJobEdit">
              <AdminJobEdit></AdminJobEdit>
            </Route>
            <Route exact path="/adminTechEdit">
              <AdminTechEdit></AdminTechEdit>
            </Route>
            <Route exact path="/adminTechAdd">
              <AdminAddTech></AdminAddTech>
            </Route>
            <Route exact path="/adminClientAdd">
              <AdminAddClient />
            </Route>
            <Route exact path="/adminClientEdit">
              <AdminClientEdit />
            </Route>
            <Route exact path="/reviewInquiries">
              <ReviewInquires />
            </Route>
            <Route exact path="/adminjob">
              <AdminJob />
            </Route>
            <Route exact path="/pastTransaction">
              <PastTransaction />
            </Route>
            <Route exact path="/manageTech">
              <ManageTechPage />
            </Route>
            <Route exact path="/ManageClient">
              <ManageClient />
            </Route>
            <Route exact path="/pastTransaction">
              <PastTransaction />
            </Route>
            <Route exact path="/pastTransactionDetail">
              <PastTransactionDetail/>
            </Route>
            <Route exact path="/TestPage">
              <TestPage></TestPage>
            </Route>

            <Route exact path="*">
              <ErrorPage />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;