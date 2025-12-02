import type { IconProps } from "../../shared/types/iconTypes";

const LogoutIcon = ({ width, height, color }: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24">
            <path
                fill="none"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M7.023 5.5a9 9 0 1 0 9.953 0M12 2v8"
                color={color}
            />
        </svg>
    );
};

export default LogoutIcon;
