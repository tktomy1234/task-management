import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextInput from './TextInput';

describe('TextInput', () => {
  it('should render the input element with the provided value', () => {
    const value = 'Hello';
    const { getByDisplayValue } = render(<TextInput value={value} />);
    const inputElement = getByDisplayValue(value);
    expect(inputElement).toBeInTheDocument();
  });

  it('should call the onChange function when the input value changes', () => {
    const onChangeMock = jest.fn();
    const { getByRole } = render(<TextInput value="" onChange={onChangeMock} />);
    const inputElement = getByRole('textbox');
    const newValue = 'New Value';
    fireEvent.change(inputElement, { target: { value: newValue } });
    expect(onChangeMock).toHaveBeenCalledWith(newValue);
  });

  it('should render the input element with the provided placeholder', () => {
    const placeholder = 'Enter text';
    const { getByPlaceholderText } = render(<TextInput value="" placeholder={placeholder} />);
    const inputElement = getByPlaceholderText(placeholder);
    expect(inputElement).toBeInTheDocument();
  });
});