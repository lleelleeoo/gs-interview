import Head from "next/head";
import { PropsWithChildren } from "react";

import { Header } from "@/components/Header/Header";

import styles from "./MainLayout.module.css";

const globalTitle = "greenscrens.ai";

type MainLayoutProps = PropsWithChildren<{
    title?: string
}>;

export function MainLayout({ children, title }: MainLayoutProps) {
    return (
        <>
            <Head>
                <title>{title || globalTitle}</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            {children}
        </>
    );
};
