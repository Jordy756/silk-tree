// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { AuthStatusProvider } from "./shared/context/authStatusContext";
// import Home from "./features/home";
// import { ToastProvider } from "./shared/context/toastContext";
// import Layout from "./shared/layouts/Layout";

// import { Auth } from "@modules/auth/pages";
import { Home } from "@modules/home/pages/Home.tsx";
import { MainLayout } from "@shared/layouts";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/authorization" element={<Auth />} /> */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <ToastProvider>
    //   <AuthStatusProvider>
    //     <BrowserRouter>
    //       <Routes>
    //         {/* <Route path="/authorization" element={<Auth />} /> */}
    //         <Route element={<Layout />}>
    //           <Route path="/" element={<Home />} />
    //           {/* <Route path="/schedule-appointment" element={<ScheduleAppointment />} /> */}
    //         </Route>
    //       </Routes>
    //     </BrowserRouter>
    //   </AuthStatusProvider>
    // </ToastProvider>
  );
};

export default App;
