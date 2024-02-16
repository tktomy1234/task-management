import React from 'react';

interface TextInputProps {
    value: string;
    onChange?: (value: string) => void;
    placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = ({ value, onChange, placeholder = "" }) => {
    const onChangeHandler = (e: React.FormEvent<HTMLInputElement>):void => {
        if (onChange) {
          onChange(e.currentTarget.value);
        }
    }
    
    return (
        <input type="text" value={value} onChange={onChangeHandler} placeholder={placeholder} />
    );
};

export default TextInput;
