import NextLink from "next/link";

import styles from "./Logo.module.css";

export function Logo () {
    return (
        <NextLink
            href="/"
            className={styles.logo}
            data-testid="logo">
                greenscreens.ai
        </NextLink>
    );
}
