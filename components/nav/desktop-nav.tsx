import Image from "next/image";
import Logo from "@/public/mbio7-logo.png";
import { cn } from "../craft";
import { MobileNav } from "./mobile-nav";
import CustomButton from "../ui/customButton";
import { Button } from "../ui/button";

import { mainMenu, contentMenu } from "@/menu.config";
import { siteConfig } from "@/site.config";
import { LangToggle } from "../lang-toggle";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const Nav = ({ className, children, id }: NavProps) => {
     const t =  useTranslations('Nav');

   const mainMenu =  [
    {key: t('home'), href: t('homeLink')},
    {key: t('fabrication'), href: t('fabricationLink')},
    {key: t('utilisations'), href: t('utilisationsLink')},
    {key: t('experiance'), href: t('experianceLink')},
   ]
    return (
        <nav
            className={cn(
                "sticky z-50 top-0 bg-transparent backdrop-blur-sm transition-shadow duration-200 print:hidden w-full text-white",
                
                className
            )}
            id={id}
        >
          
            <div
                id="nav-container"
                className="max-w-6xl mx-auto py-4 px-6 sm:px-8 flex justify-between items-center"
            >
             
                <Link
                    className="hover:opacity-75 transition-all flex gap-2 items-center"
                    href="/"
                >
                    <Image
                        src={Logo}
                        alt="Logo"
                        loading="eager"
                        className="dark:invert"
                        width={40}
                        height={19.44}
                    ></Image>
                    <h2 className="text-2xl  ">
                        {siteConfig.site_name}
                    </h2>
                </Link>
                {children}
                <div className="flex items-center gap-2">
                    <div className="mx-2 hidden md:flex">
                       {mainMenu.map(({ key, href }) => (
                            <Button
                                key={href}
                                asChild
                                variant="ghost"
                                size="sm"
                            >
                                <Link href={href}>
                                    {key.charAt(0).toUpperCase() + key.slice(1)}
                                </Link>
                            </Button>
                        ))}
                    </div>
                    <MobileNav />
                </div>
                <div className="flex items-center gap-2">

                <div className="hidden md:flex">
                    <CustomButton label="Contact" href="/#contact" />
                </div>
                <LangToggle />
                </div>
            </div>
        </nav>
    );
};
export default Nav;