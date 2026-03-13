import { useEffect, useState } from "react";
import { Specialty } from "../entities/Specialty";
import { getAllSpecialitiesService } from "../services/getAllSpecialitiesService";
import { ApiError } from "../../../shared/utils/apiError";
import { useToast } from "../../../shared/hooks/useToast";

export const useSpecialties = () => {
    const { addToast } = useToast();
    const [specialties, setSpecialties] = useState<Specialty[]>([]);

    useEffect(() => {
        const fetchSpecialties = async () => {
            try {
                setSpecialties(await getAllSpecialitiesService());
            } catch (error: any) {
                console.error(error);
                if (error instanceof ApiError) addToast({ title: error.name, message: error.message, type: "error" });
            }
        };

        fetchSpecialties();
    }, []);

    return { specialties };
};
