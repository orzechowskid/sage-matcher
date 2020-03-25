import React from 'react';
import {
    useField
} from 'react-form';

function Text(props) {
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
            type="text"
        />
    );
}

export default Text;
