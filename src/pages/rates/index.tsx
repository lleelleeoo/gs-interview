import { CircularProgress,Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { PropsWithChildren, useMemo } from "react";

import { Card } from "@/components/Card/Card";
import { MainLayout } from "@/layouts/Main/MainLayout";

import styles from "./index.module.css";

function Rates({ ...pageProps }: PropsWithChildren) {
    const PopulationMap = useMemo(() => dynamic(
        () => import("@/components/PopulationMap/PopulationMap").then(({ PopulationMap }) => PopulationMap),
        {
            loading: () => <div className={styles["map-skeleton"]}><CircularProgress /></div>,
            ssr: false
        }
    ), []);

    return (
        <MainLayout {...pageProps}>
            <div className={styles["card-block"]}>
                <Card className={styles["card-item"]}>
                    <Typography variant="h5">Only tiles</Typography>
                    <PopulationMap showMapLayer={false} />
                </Card>
                <Card className={styles["card-item"]}>
                    <Typography variant="h5">Or with map</Typography>
                    <PopulationMap position={[63, -158]} />
                </Card>
            </div>
        </MainLayout>
    );
}

export { Rates as default };
