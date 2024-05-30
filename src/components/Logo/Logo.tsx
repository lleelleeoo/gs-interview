import styles from "./Logo.module.css";

export function Logo () {
    return (
        <span
            className={styles.logo}
            data-testId="LogoComponent">
                greenscreens.ai
        </span>
    );
}
