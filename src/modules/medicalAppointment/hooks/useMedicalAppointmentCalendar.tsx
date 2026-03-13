import { dayjsLocalizer, Views } from "react-big-calendar";
import { useCallback, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/es";

export const useMedicalAppointmentCalendar = () => {
    dayjs.locale("es");

    const { WEEK, MONTH } = Views;

    const [currentView, setCurrentView] = useState<(typeof Views)[keyof typeof Views]>(MONTH);

    const localizer = dayjsLocalizer(dayjs);

    const startAccessor = "start";
    const endAccessor = "end";

    const views = [MONTH, WEEK];

    const min = dayjs("2025-03-10T08:00:00").toDate();
    const max = dayjs("2025-03-11T19:00:00").toDate();

    const messages = {
        allDay: "Todo el día",
        previous: "<",
        next: ">",
        today: "Hoy",
        month: "Mes",
        week: "Semana",
        day: "Día",
        agenda: "Agenda",
        date: "Fecha",
        time: "Hora",
        event: "Evento",
    };

    const handleCurrentView = useCallback((view: (typeof Views)[keyof typeof Views]) => setCurrentView(view), []);

    return {
        localizer,
        startAccessor,
        endAccessor,
        views,
        min,
        max,
        messages,
        currentView,
        handleCurrentView,
    };
};
