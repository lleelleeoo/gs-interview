import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren } from "react";

import styles from "./Card.module.css";

type CardProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export function Card({ className, ...restProps }: CardProps) {
    return (
        <div
            data-testid="card"
            className={clsx(styles.card, className)}
            {...restProps}
        />
    );
};
