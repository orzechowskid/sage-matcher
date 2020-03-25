import React, {
    Fragment
} from 'react';
import {
    useForm
} from 'react-form';

import Checkbox from '../components/form/Checkbox';
import Email from '../components/form/Email';
import Tel from '../components/form/Tel';
import Text from '../components/form/Text';
import {
    localize
} from '../utils/i18n';

import styles from './Volunteer.module.scss';

function onSubmit() {
    console.log(`submit:`, arguments);
}

function Volunteer(props) {
    const {
        t
    } = props;
    const {
        Form,
        meta
    } = useForm({
        onSubmit
    });

    return(
        <Fragment>
            <h1>
                {t(`i-want-to-help`)}
            </h1>

            <p>
                {t(`who-is-a-match`)}
            </p>

            <p>
                {t(`Form:contact-info`)}
            </p>

            <div>
                <Form className={styles.form}>
                    <label>
                        {t(`first-name`)}
                        <Text className={styles.input} name="firstname" />
                    </label>

                    <label>
                        {t(`last-name`)}
                        <Text name="lastname" />
                    </label>

                    <label>
                        {t(`Form:email-address`)}
                        <Email
                            name="email"
                            placeholder="you@email.xyz"
                        />
                    </label>

                    <label>
                        {t(`Form:phone-number`)}
                        <Tel
                            name="phone"
                            pattern="[0-9]{3}[-.]?[0-9]{3}[-.]?[0-9]{4}"
                            placeholder="123-456-7890"
                        />
                    </label>

                    <label>
                        {t(`street-address-1`)}
                        <Text
                            name="address"
                            placeholder="123 Main St."
                        />
                    </label>

                    <label>
                        {t(`street-address-2`)}
                        <Text
                            name="address2"
                            placeholder="Apt 2B"
                        />
                    </label>

                    <label>
                        {t(`Form:zipcode`)}
                        <Text
                            name="zipcode"
                            pattern="[0-9]{5}"
                            placeholder="00000"
                        />
                    </label>

                    <p>
                        {t(`low-risk-text`)}
                    </p>

                    <label>
                        {t(`Form:i-agree`)}
                        <Checkbox name="agreedLowRisk" />
                    </label>

                    <p>
                        {t(`Form:legal-notices`)}
                    </p>

                    <p>blah</p>

                    <label>
                        {t(`Form:i-agree`)}
                        <Checkbox name="agreedLegalTerms" />
                    </label>

                    <button
                        className={styles.submitButton}
                        type="submit"
                    >
                        {t(`submit`)}
                    </button>
                </Form>
            </div>
        </Fragment>
    );
}

export default localize(Volunteer);
