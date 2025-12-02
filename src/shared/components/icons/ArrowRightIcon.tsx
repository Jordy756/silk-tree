import type { IconProps } from "../../shared/types/iconTypes";

const ArrowRightIcon = ({ width, height, color }: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24">
            <path
                fill={color}
                d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"
            />
        </svg>
    );
};

export default ArrowRightIcon;
