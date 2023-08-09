interface SeparatorProps {
    size: number;
    color?: string;
    hex?: string;
    className?: string;
}

export default function Separator({
    size,
    color,
    hex,
    className = '',
}: SeparatorProps) {
    return (
        <hr
            className={`h-[${size}px] bg-${
                color ? color : `[${hex}]`
            } border-0 ${className}`}
        ></hr>
    );
}
