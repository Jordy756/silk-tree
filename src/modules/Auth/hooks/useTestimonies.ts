import { useCallback, useEffect, useState } from "react";
import testimoniesJSON from "../data/testimonies.json";

const useTestimonies = () => {
    const [testimonies, setTestimonies] = useState(testimoniesJSON);
    const [activeTestimonyId, setActiveTestimonyId] = useState(0);

    const handlePrevTestimony = useCallback(() => {
        setTestimonies((prev) => {
            const last = prev[prev.length - 1];
            const rest = prev.slice(0, -1);
            setActiveTestimonyId(activeTestimonyId - 1 === -1 ? testimonies.length - 1 : activeTestimonyId - 1);
            return [last, ...rest];
        });
    }, [activeTestimonyId, testimonies.length]);

    const handleNextTestimony = useCallback(() => {
        setTestimonies((prev) => {
            const [first, ...rest] = prev;
            setActiveTestimonyId(activeTestimonyId + 1 === testimonies.length ? 0 : activeTestimonyId + 1);
            return [...rest, first];
        });
    }, [activeTestimonyId, testimonies.length]);

    useEffect(() => {
        const interval = setInterval(() => handleNextTestimony(), 15000);
        return () => clearInterval(interval);
    }, [handleNextTestimony]);

    return { testimonies, handlePrevTestimony, handleNextTestimony, activeTestimonyId };
};

export default useTestimonies;
