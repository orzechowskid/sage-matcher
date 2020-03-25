import React from 'react';
import {
    useField
} from 'react-form';

function Tel(props) {
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
            type="tel"
        />
    );
}

export default Tel;
