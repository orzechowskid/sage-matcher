import {
    A
} from 'hookrouter';
import React from 'react';

import {
    localize
} from '../utils/i18n';

import styles from './Header.module.scss';

function Header(props) {
    const {
        t
    } = props;

    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <a href="https://sagenyc.org">
                    <img
                        className={styles.banner}
                        alt="SAGE"
                        src="https://sagenyc.org/images/SAGEbannerNYC4.gif"
                    />
                </a>

                <A
                    className={styles.name}
                    href="/"
                >
                    <span>
                        {t(`name`)}
                    </span>
                </A>

                <span className={styles.login}>
                    {t(`admin-login`)}
                </span>
            </div>
        </div>
    );
}

export default localize(Header);
