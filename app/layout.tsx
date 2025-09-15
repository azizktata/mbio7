import "./globals.css";

import { Section, Container } from "@/components/craft";
import { Inter as FontSans, Poppins, Roboto } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { MobileNav } from "@/components/nav/mobile-nav";
import { Analytics } from "@vercel/analytics/react";
import { Button } from "@/components/ui/button";

import { mainMenu, contentMenu } from "@/menu.config";
import { siteConfig } from "@/site.config";
import { cn } from "@/lib/utils";

import Balancer from "react-wrap-balancer";
import Logo from "@/public/mbio7-logo.png";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/public/hero.jpg";

import type { Metadata } from "next";
import CustomButton from "@/components/ui/customButton";
import Nav from "@/components/nav/desktop-nav";

const font = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-sans",
});

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["600"],
    variable: "--font-roboto",
});

export const metadata: Metadata = {
    title: "Mbio7",
    description: "mBio7, le panneau biosourcé à empreinte carbone négative.",
    metadataBase: new URL(siteConfig.site_domain),
    alternates: {
        canonical: "/",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body
                className={cn(
                    "min-h-screen font-sans antialiased",
                    poppins.variable
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    forcedTheme="light"
                    disableTransitionOnChange
                >
                    
                    {children}
                    <Footer />
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    );
}




const Footer = () => {
    return (
        <footer className="bg-mbioPrimary text-white">
            <Section>
                <Container className="grid md:grid-cols-[1.5fr_0.5fr_0.5fr] gap-12">
                    <div className="flex flex-col gap-6 not-prose">
                        <Link href="/">
                            <h3 className="sr-only">{siteConfig.site_name}</h3>
                            <Image
                                src={Logo}
                                alt="Logo"
                                className="dark:invert"
                                width={80}
                                height={74}
                            ></Image>
                        </Link>
                        <p>
                            <Balancer>{siteConfig.site_description}</Balancer>
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 text-sm">
                        <h5 className="font-medium text-base">Liens rapides</h5>
                        {Object.entries(mainMenu).map(([key, href]) => (
                            <Link
                                className="hover:underline underline-offset-4"
                                key={href}
                                href={href}
                            >
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                            </Link>
                        ))}
                    </div>
                    {/* <div className="flex flex-col gap-2 text-sm">
                        <h5 className="font-medium text-base">Blog</h5>
                        {Object.entries(contentMenu).map(([key, href]) => (
                            <Link
                                className="hover:underline underline-offset-4"
                                key={href}
                                href={href}
                            >
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                            </Link>
                        ))}
                    </div> */}
                </Container>
                <Container className="border-t not-prose flex flex-col md:flex-row md:gap-2 gap-6 justify-between md:items-center">
                    <p className="text-sm text-mbioMutedForeground">
                        &copy; {new Date().getFullYear()} {siteConfig.site_name}
                        – Tous droits réservés.
                    </p>
                    <div className="flex items-center gap-4">
                       {/* <Instagram className="w-5 h-5 hover:opacity-80" />
                       <LinkedIn className="w-5 h-5 hover:opacity-80" /> */}
                    </div>
   
        </Container>
            </Section>
        </footer>
    );
};
