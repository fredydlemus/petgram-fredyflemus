import React from 'react'

export const useInputValue = (initialValue) => {
    const [value, setValue] = React.useState(initialValue);
    const onChange = (e) => setValue(e.target.value);

    return { value, onChange };
};