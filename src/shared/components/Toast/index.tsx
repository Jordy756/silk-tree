import { getFormattedDateString, TIME_12_FORMAT } from "../../utils/handleDates";
import { useToast } from "../../hooks/useToast";
import { ToastProps } from "../../types/toastTypes";
import CloseIcon from "../../../assets/icons/CloseIcon";
import SuccessIcon from "../../../assets/icons/SuccessIcon";
import Button from "../Button";
import ErrorIcon from "../../../assets/icons/ErrorIcon";
import WarningIcon from "../../../assets/icons/WarningIcon";
import InfoIcon from "../../../assets/icons/InfoIcon";
import "./index.css";

const Toast = ({ id, title, type, message, removing }: ToastProps) => {
    const { removeToast } = useToast();

    const icons = {
        success: <SuccessIcon width={24} height={24} color="var(--success-500)" />,
        error: <ErrorIcon width={24} height={24} color="var(--error-500)" />,
        warning: <WarningIcon width={24} height={24} color="var(--warning-500)" />,
        info: <InfoIcon width={24} height={24} color="var(--info-500)" />,
    };

    return (
        <div className={`toast ${removing ? "removing" : ""} toast__${type}`}>
            <aside>{icons[type]}</aside>
            <div className="main__content">
                <header>
                    <h6>{title}</h6>
                    <Button type="button" className="icon" onClick={() => removeToast(id || "")}>
                        <CloseIcon width={24} height={24} color="var(--neutral-900)" />
                    </Button>
                </header>
                <main>
                    <p>{message}</p>
                </main>
                <footer>
                    <p>{getFormattedDateString(new Date(), TIME_12_FORMAT)}</p>
                </footer>
            </div>
            <div className="progress__bar"></div>
        </div>
    );
};

export default Toast;
