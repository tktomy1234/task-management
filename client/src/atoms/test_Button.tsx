import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
    it('should render the button with the correct label', () => {
        const label = 'Click me';
        const { getByText } = render(<Button label={label} />);
        const buttonElement = getByText(label);
        expect(buttonElement).toBeInTheDocument();
    });

    it('should call the onClick function when the button is clicked', () => {
        const onClickMock = jest.fn();
        const { getByText } = render(<Button label="Click me" onClick={onClickMock} />);
        const buttonElement = getByText('Click me');
        fireEvent.click(buttonElement);
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    it('should be disabled when isDisabled prop is true', () => {
        const { getByText } = render(<Button label="Click me" isDisabled={true} />);
        const buttonElement = getByText('Click me');
        expect(buttonElement).toBeDisabled();
    });
});