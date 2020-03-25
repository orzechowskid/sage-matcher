import React from 'react';
import {
    useField
} from 'react-form';

function Checkbox(props) {
    const {
        name,
        validate,
        ...otherProps
    } = props;
    const {
        getInputProps,
        meta: { error, isTouched, isValidating }
    } = useField(name, {
        validate
    });

    return (
        <input
            {...otherProps}
            {...getInputProps()}
            type="checkbox"
        />
    );
}

export default Checkbox;
