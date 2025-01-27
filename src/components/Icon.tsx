import React from "react";

type Props = {
    id: string;
    className?: string;
}

const Icon = (props: Props): React.JSX.Element => {
    const { id, className } = props;
    const iconClassName = typeof className === "string" ? `icon ${className}` : "icon";

    return (
        <svg className={iconClassName} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <use href={`#${id}`} />
        </svg>
    );
};

export default Icon;
