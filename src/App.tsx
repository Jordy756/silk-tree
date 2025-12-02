import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthStatusProvider } from "./shared/context/authStatusContext";
import Auth from "./features/auth";
import Home from "./features/home";
import ScheduleAppointment from "./features/medicalAppointment";
import Layout from "./shared/layouts/Layout";
import { ToastProvider } from "./shared/context/toastContext";

const App = () => {
    return (
        <ToastProvider>
            <AuthStatusProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/authorization" element={<Auth />} />
                        <Route element={<Layout />}>
                            <Route path="/" element={<Home />} />
                            <Route path="/schedule-appointment" element={<ScheduleAppointment />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </AuthStatusProvider>
        </ToastProvider>
    );
};

export default App;
