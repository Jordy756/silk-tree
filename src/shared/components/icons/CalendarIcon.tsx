import type { IconProps } from "../../shared/types/iconTypes";

const CalendarIcon = ({ width, height, color }: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 32 32">
            <path
                fill={color}
                d="M9 4v1H5v22h22V5h-4V4h-2v1H11V4zM7 7h2v1h2V7h10v1h2V7h2v2H7zm0 4h18v14H7zm6 2v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zM9 17v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zM9 21v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2z"
            />
        </svg>
    );
};

export default CalendarIcon;
