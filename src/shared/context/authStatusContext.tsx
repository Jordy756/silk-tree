import { createContext, ReactNode, useEffect, useState } from "react";
import { getAuthStatusService } from "../services/getAuthStatusService";

type AuhtStatusContextType = {
    isAuthenticated: boolean;
    handleIsAuthenticated: (isAuthenticated: boolean) => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const AuthStatusContext = createContext<AuhtStatusContextType | undefined>(undefined);

export const AuthStatusProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleIsAuthenticated = (isAuthenticated: boolean) => setIsAuthenticated(isAuthenticated);

    useEffect(() => {
        const fetchAuthStatus = async () => {
            const { isAuthenticated } = await getAuthStatusService();
            handleIsAuthenticated(isAuthenticated);
        };

        fetchAuthStatus();
    }, []);

    return (
        <AuthStatusContext.Provider value={{ isAuthenticated, handleIsAuthenticated }}>
            {children}
        </AuthStatusContext.Provider>
    );
};
