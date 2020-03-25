import React from 'react';

import enUS from '../translations/en-US.json';

const dictionaries = {
    'en-US': enUS
};

let dictionary = enUS;

function setDictionary(key) {
    dictionary = dictionaries[key] || dictionary;
}

function t(key) {
    return dictionary && dictionary[key];
}

function localize(FnComp) {
    const namespace = FnComp.displayName || FnComp.name;

    function translate(key) {
        return t(`${namespace}:${key}`)
            || t(key)
            || `[${namespace}:]${key}`;
    }

    function Localized(props) {
        return (
            <FnComp
                {...props}
                t={translate}
            />
        );
    }

    return Localized;
}

export {
    localize,
    setDictionary,
    t
};
