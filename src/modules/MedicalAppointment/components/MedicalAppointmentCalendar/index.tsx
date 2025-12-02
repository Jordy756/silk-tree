import { Calendar, Views } from "react-big-calendar";
import { useMedicalAppointmentCalendar } from "../../hooks/useMedicalAppointmentCalendar";
import { useMedicalAppointments } from "../../hooks/useMedicalAppointments";
import { useMoveMedicalAppointment } from "../../hooks/useMoveMedicalAppointment";
import { useSelectMedicalAppointment } from "../../hooks/useSelectMedicalAppointment";
import { useSelectMedicalAppointmentSlot } from "../../hooks/useSelectMedicalAppointmentSlot";
import { useResizeMedicalAppointment } from "../../hooks/useResizeMedicalAppointment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop/withDragAndDrop.js";
import "./index.css";

const DragAndDropCalendar = withDragAndDrop(Calendar);

const MedicalAppointmentCalendar = () => {
    const { MONTH } = Views;
    const { localizer, startAccessor, endAccessor, views, min, max, messages, currentView, handleCurrentView } =
        useMedicalAppointmentCalendar();
    const { medicalAppointments } = useMedicalAppointments();
    const { selectMedicalAppointment } = useSelectMedicalAppointment();
    const { selectMedicalAppointmentSlot } = useSelectMedicalAppointmentSlot(currentView);
    const { resizeMedicalAppointment } = useResizeMedicalAppointment();
    const { moveMedicalAppointment } = useMoveMedicalAppointment();

    return (
        <DragAndDropCalendar
            className="appointment__calendar"
            localizer={localizer}
            startAccessor={startAccessor}
            endAccessor={endAccessor}
            style={{ height: "100vh" }}
            events={medicalAppointments}
            views={views}
            min={min}
            max={max}
            messages={messages}
            selectable
            resizable
            popup
            onSelectEvent={selectMedicalAppointment}
            onSelectSlot={selectMedicalAppointmentSlot}
            onView={handleCurrentView}
            onEventResize={currentView !== MONTH && resizeMedicalAppointment}
            onEventDrop={moveMedicalAppointment}
        />
    );
};

export default MedicalAppointmentCalendar;
