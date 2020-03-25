import {
    A
} from 'hookrouter';
import React, {
    Fragment
} from 'react';

import {
    localize
} from '../utils/i18n';

import styles from './Home.module.scss';

function Home(props) {
    const {
        t
    } = props;

    return (
        <Fragment>
            <h1 className={styles.leadText}>
                {t(`title`)}
            </h1>

            <h2 className={styles.leadText}>
                {t(`subtitle`)}
            </h2>

            <p>
                {t(`description`)}
            </p>

            <div className={styles.ctaWrapper}>
                <A
                    className={`${styles.mainLink} ${styles.register}`}
                    href="/register"
                >
                    <div className={styles.linkTitle}>
                        {t(`i-need-a-match`)}
                    </div>

                    <div className={styles.linkSubtitle}>
                        {t(`register-description`)}
                    </div>

                    <div
                        aria-hidden="true"
                        className={styles.clickCta}
                    >
                        {t(`click-here`)}
                    </div>

                    <div
                        aria-hidden="true"
                        className={styles.tapCta}
                    >
                        {t(`tap-here`)}
                    </div>
                </A>

                <p className={`${styles.caption} ${styles.register}`}>
                    {t(`register-caption`)}
                </p>

                <p className={`${styles.explanation} ${styles.register}`}>
                    {t(`register-explanation`)}
                </p>

                <A
                    className={`${styles.mainLink} ${styles.volunteer}`}
                    href="/volunteer"
                >
                    <div className={styles.linkTitle}>
                        {t(`i-would-like-to-help`)}
                    </div>

                    <div className={styles.linkSubtitle}>
                        {t(`volunteer-description`)}
                    </div>

                    <div
                        aria-hidden="true"
                        className={styles.clickCta}
                    >
                        {t(`click-here`)}
                    </div>

                    <div
                        aria-hidden="true"
                        className={styles.tapCta}
                    >
                        {t(`tap-here`)}
                    </div>
                </A>

                <p className={`${styles.caption} ${styles.volunteer}`}>
                    {t(`volunteer-caption`)}
                </p>

                <p className={`${styles.explanation} ${styles.volunteer}`}>
                    {t(`volunteer-explanation`)}
                </p>
            </div>
        </Fragment>
    );
}

export default localize(Home);
