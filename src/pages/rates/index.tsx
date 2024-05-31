import { Typography } from "@mui/material";
import { PropsWithChildren } from "react";

import { Card } from "@/components/Card/Card";
import { MainLayout } from "@/layouts/Main/MainLayout";

import styles from "./index.module.css";

function Home({ ...pageProps }: PropsWithChildren) {
    return (
        <MainLayout {...pageProps}>
            <Card>filters be there</Card>
            <div className={styles["card-block"]}>
                <Card className={styles["card-item"]}>
                    <Typography variant="h5">Win Rate %</Typography>
                </Card>
                <Card className={styles["card-item"]}>
                    <Typography variant="h5">Est. Margin %</Typography>
                </Card>
            </div>
        </MainLayout>
    );
}

export { Home as default };
