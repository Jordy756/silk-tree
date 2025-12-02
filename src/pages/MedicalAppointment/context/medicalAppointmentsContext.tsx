import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { MedicalAppointment } from "../entities/MedicalAppointment";
import { useSpecialties } from "../hooks/useSpecialties";
import { Specialty } from "../entities/Specialty";
import { getAllMedicalAppointmentsService } from "../services/getAllMedicalAppointmentsService";

type MedicalAppointmentsContextType = {
    specialties: Specialty[];
    currentMedicalAppointment: MedicalAppointment;
    medicalAppointments: MedicalAppointment[];
    handleCurrentMedicalAppointment: (medicalAppointment: MedicalAppointment) => void;
    addMedicalAppointment: (newMedicalAppointment: MedicalAppointment) => void;
    modifyMedicalAppointment: (updatedMedicalAppointments: MedicalAppointment) => void;
    removeMedicalAppointment: () => void;
    checkMedicalAppointmentOverlap: (newMedicalAppointment: MedicalAppointment) => boolean;
};

// eslint-disable-next-line react-refresh/only-export-components
export const MedicalAppointmentsContext = createContext<MedicalAppointmentsContextType | undefined>(undefined);

export const MedicalAppointmentsProvider = ({ children }: { children: ReactNode }) => {
    const { specialties } = useSpecialties();
    const [currentMedicalAppointment, setCurrentMedicalAppointment] = useState<MedicalAppointment>({
        id: "",
        title: "",
        start: new Date(),
        end: new Date(),
        specialty: { id: 0, name: "" },
    });

    const [medicalAppointments, setMedicalAppointments] = useState<MedicalAppointment[]>([]);

    useEffect(() => {
        const fetchMedicalAppointments = async () => {
            try {
                setMedicalAppointments(await getAllMedicalAppointmentsService());
            } catch (err) {
                console.error(err);
            }
        };

        fetchMedicalAppointments();
    }, []);

    const handleCurrentMedicalAppointment = useCallback(
        (medicalAppointment: MedicalAppointment) => setCurrentMedicalAppointment(medicalAppointment),
        [setCurrentMedicalAppointment]
    );

    const addMedicalAppointment = useCallback(
        (newMedicalAppointment: MedicalAppointment) =>
            setMedicalAppointments((prev) => [...prev, newMedicalAppointment]),
        [setMedicalAppointments]
    );

    const modifyMedicalAppointment = useCallback(
        (updatedMedicalAppointment: MedicalAppointment) =>
            setMedicalAppointments((prev) =>
                prev.map((medicalAppointment) =>
                    medicalAppointment.id === updatedMedicalAppointment.id
                        ? updatedMedicalAppointment
                        : medicalAppointment
                )
            ),
        [setMedicalAppointments]
    );

    const removeMedicalAppointment = useCallback(() => {
        setMedicalAppointments((prev) =>
            prev.filter((medicalAppointment) => medicalAppointment.id !== currentMedicalAppointment.id)
        );
    }, [setMedicalAppointments, currentMedicalAppointment.id]);

    const checkMedicalAppointmentOverlap = (newMedicalAppointment: MedicalAppointment) =>
        medicalAppointments.some(
            ({ id, start, end }) =>
                newMedicalAppointment.id !== id &&
                newMedicalAppointment.start < end &&
                newMedicalAppointment.end > start
        );

    return (
        <MedicalAppointmentsContext.Provider
            value={{
                specialties,
                currentMedicalAppointment,
                medicalAppointments,
                handleCurrentMedicalAppointment,
                addMedicalAppointment,
                modifyMedicalAppointment,
                removeMedicalAppointment,
                checkMedicalAppointmentOverlap,
            }}
        >
            {children}
        </MedicalAppointmentsContext.Provider>
    );
};
