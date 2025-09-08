import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/mbio-logo.svg";
import { cn } from "../craft";
import { MobileNav } from "./mobile-nav";
import CustomButton from "../ui/customButton";
import { Button } from "../ui/button";

import { mainMenu, contentMenu } from "@/menu.config";
import { siteConfig } from "@/site.config";

const Nav = ({ className, children, id }: NavProps) => {
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
                        width={30}
                        height={18.44}
                    ></Image>
                    <h2 className="text-2xl uppercase ">
                        {siteConfig.site_name}
                    </h2>
                </Link>
                {children}
                <div className="flex items-center gap-2">
                    <div className="mx-2 hidden md:flex">
                        {Object.entries(mainMenu).map(([key, href]) => (
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
                <div className="hidden md:flex">
                    <CustomButton label="Sign In" href="#contact" />
                </div>
            </div>
        </nav>
    );
};
export default Nav;