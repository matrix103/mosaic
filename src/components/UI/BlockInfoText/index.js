import React from 'react';
import styles from "./BlockInfoText.module.scss";

export default function BlockInfoText ({title, description}) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.text}>
                <div className={styles.title}>
                    {title}
                </div>
                <div className={styles.description}>
                    {description}
                </div>
            </div>
        </div>
    );
};

