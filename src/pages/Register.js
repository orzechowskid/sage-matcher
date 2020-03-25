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

import styles from './Register.module.scss';

function onSubmit() {
    console.log(`submit:`, arguments);
}

function Register(props) {
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
                {t(`title`)}
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
                        {t(`name`)}
                        <Text className={styles.input} name="firstname" />
                    </label>

                    <label>
                        {t(`Form:email-address`)}
                        <Email
                            name="email"
                        />
                    </label>

                    <label>
                        {t(`Form:phone-number`)}
                        <Tel
                            name="phone"
                            pattern="[0-9]{3}[-.]?[0-9]{3}[-.]?[0-9]{4}"
                        />
                    </label>

                    <label>
                        {t(`street-address`)}
                        <Text
                            name="address"
                        />
                    </label>

                    <label>
                        {t(`Form:zipcode`)}
                        <Text
                            name="zipcode"
                            pattern="[0-9]{5}"
                        />
                    </label>

                    <p>
                        {t(`eligibility-text`)}
                    </p>

                    <label>
                        {t(`Form:i-agree`)}
                        <Checkbox name="agreedEligibility" />
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

export default localize(Register);
