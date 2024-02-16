import React, { FC, MouseEventHandler } from 'react';

interface ButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    label: React.ReactNode;
    isDisabled?: boolean;
}

const Button: FC<ButtonProps> = ({ onClick = () => {}, label, isDisabled = false }) => {
    return (
        <button onClick={onClick} disabled={isDisabled}>
            {label}
        </button>
    );
};

export default Button;
