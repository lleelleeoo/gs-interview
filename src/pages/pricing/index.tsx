import { Typography } from "@mui/material";
import { PropsWithChildren } from "react";

import { Card } from "@/components/Card/Card";
import { MainLayout } from "@/layouts/Main/MainLayout";

function Home({ ...pageProps }: PropsWithChildren) {
    return (
        <MainLayout {...pageProps}>
            <Card>
                <Typography variant="h5">pricing</Typography>
            </Card>
        </MainLayout>
    );
}

export { Home as default };
