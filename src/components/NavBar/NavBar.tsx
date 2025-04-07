/** @format */

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";

function NavBar() {
    return (
        <div className="flex justify-center items-center w-full h-20 mt-2">
            <div className="flex bg-gray-100 h-14 border-2 border-black justify-center w-1/4 rounded-full fixed top-0 left-0 right-0 mx-auto">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link
                                href="#home"
                                passHref
                                legacyBehavior>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Landing Page</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                href="#work"
                                className={navigationMenuTriggerStyle()}>
                                Work Experience
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem></NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link
                                href="#contact"
                                passHref
                                legacyBehavior>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    );
}

export default NavBar;
