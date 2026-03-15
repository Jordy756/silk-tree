import MedicalAppointmentCalendar from "../components/Calendar";
import { ConfirmationModalProvider } from "../../../shared/context/confirmationModalContext";
import { StandardModalProvider } from "../../../shared/context/standardModalContext";
import { MedicalAppointmentsProvider } from "../context/medicalAppointmentsContext";
import "./index.css";

const ScheduleAppointment = () => {
  return (
    <ConfirmationModalProvider>
      <MedicalAppointmentsProvider>
        <StandardModalProvider>
          <MedicalAppointmentCalendar />
        </StandardModalProvider>
      </MedicalAppointmentsProvider>
    </ConfirmationModalProvider>
  );
};

export default ScheduleAppointment;
