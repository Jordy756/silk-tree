// import { getFormattedDateString, TIME_12_FORMAT } from "@utils/handleDates";
// import { useToast } from "@hooks/useToast";
import type { ToastProps } from "../../types/toastTypes";
import { CloseIcon, SuccessIcon, ErrorIcon, WarningIcon, InfoIcon } from "@shared/components/icons";

export const Toast = ({ id, title, type, message, removing }: ToastProps) => {
  // const { removeToast } = useToast();

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
          {/* <button onClick={() => removeToast(id || "")}>
            <CloseIcon width={24} height={24} color="var(--neutral-900)" />
          </button> */}
        </header>
        <main>
          <p>{message}</p>
        </main>
        <footer>{/* <p>{getFormattedDateString(new Date(), TIME_12_FORMAT)}</p> */}</footer>
      </div>
      <div className="progress__bar"></div>
    </div>
  );
};
