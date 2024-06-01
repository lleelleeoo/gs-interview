import clsx from "clsx";
import NextLink from "next/link";

import styles from "./Logo.module.css";

type LogoProps = { className?: string };

export function Logo ({ className }: LogoProps) {
    return (
        <NextLink
            href="/"
            className={clsx(styles.logo, className)}
            data-testid="logo">
                greenscreens.ai
        </NextLink>
    );
}
