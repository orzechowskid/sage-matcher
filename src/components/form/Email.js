import React from 'react';
import {
    useField
} from 'react-form';

function Email(props) {
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
            type="email"
        />
    );
}

export default Email;
