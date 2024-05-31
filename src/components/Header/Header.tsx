import { Avatar,Divider, Tab, Tabs } from "@mui/material";
import NextLink from "next/link";

import { Logo } from "@/components/Logo/Logo";

import styles from "./Header.module.css";

// Should it be props or some global const?
const routes: { label: string; slug: string }[] = [
    {
        label: "Rates",
        slug: "/",

    },
    {
        label: "Pricing",
        slug: "/",
    }
];

export function Header() {
    return <header className={styles.header}>
        <Logo />
        <Divider
            variant="middle"
            orientation="vertical"
            flexItem
        />
        {/* Ignore navigation for this test task */}
        {/* Actualy, this part make hard couple between NextJs ant Material UI */}
        {/* Is it a separate component with some routing data provided? */}
        <Tabs data-testid='header-navigation' value={1}>
            {routes.map(({ label, slug }) => (
                <Tab key={label} label={label} component={NextLink} href={slug} />
            ))}
        </Tabs>
        <Avatar className={styles.avatar} data-testid="header-avatar">db</Avatar>
    </header>;
}
