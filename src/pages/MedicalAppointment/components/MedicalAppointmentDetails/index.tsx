import { useState } from "react";
import { useConfirmationModal } from "../../../../shared/hooks/useConfirmartionModal";
import { useUpdateMedicalAppointment } from "../../hooks/useUpdateMedicalAppointment";
import { useDeleteMedicalAppointment } from "../../hooks/useDeleteMedicalAppointment";
import MedicalAppointmentForm from "../MedicalAppointmentForm";
import Button from "../../../../shared/components/Button";
import "./index.css";

const MedicalAppointmentDetails = () => {
    const [isEditMode, setIsEditMode] = useState(true);
    const handleIsEditMode = () => setIsEditMode((prev) => !prev);

    const { showModal } = useConfirmationModal();
    const { updateMedicalAppointment } = useUpdateMedicalAppointment();
    const { deleteMedicalAppointment } = useDeleteMedicalAppointment();

    return (
        <MedicalAppointmentForm isNonEditable={isEditMode} onSubmit={updateMedicalAppointment}>
            <Button type={!isEditMode ? "button" : "submit"} className="primary" onClick={() => handleIsEditMode()}>
                {isEditMode ? "Editar" : "Actualizar"}
            </Button>
            <Button
                type="button"
                className="secondary"
                onClick={() =>
                    isEditMode ? showModal("Estas seguro?", "Eliminar", deleteMedicalAppointment) : handleIsEditMode()
                }
            >
                {isEditMode ? "Eliminar" : "Cancelar"}
            </Button>
        </MedicalAppointmentForm>
    );
};

export default MedicalAppointmentDetails;
