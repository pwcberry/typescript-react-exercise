import React from "react";

type Props = {
    id: string;
    className?: string;
}

const Icon = (props: Props): React.JSX.Element => {
    const { id, className } = props;
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <use href={`#${id}`} width="24" height="24" />
        </svg>
    );
};

export default Icon;
