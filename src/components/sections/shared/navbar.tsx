"use client";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { Menu, XIcon } from "lucide-react";

import React from "react";

import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import Container from "../../container";
import litigonLogo from "@/assets/litigon/litigon-logo-optimized.png";
import LanguageSwitcher from "./language-switcher";
import { useLanguage } from "@/i18n/language-provider";

const pages = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "Services",
    href: "/features"
  },
  {
    name: "Projects",
    href: "/projects"
  },
  {
    name: "Partners",
    href: "/partners"
  },
  {
    name: "About",
    href: "/company"
  }
]

const Navbar = () => {
  const location = useLocation();
  const { locale } = useLanguage();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const scrollRafRef = React.useRef<number | null>(null);

  const handleScroll = React.useCallback(() => {
    if (scrollRafRef.current !== null) return;
    scrollRafRef.current = requestAnimationFrame(() => {
      scrollRafRef.current = null;
      setIsScrolled(window.scrollY > 24);
    });
  }, []);

  React.useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollRafRef.current !== null) cancelAnimationFrame(scrollRafRef.current);
    };
  }, [handleScroll]);

  const closeSheet = React.useCallback(() => setIsOpen(false), []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full transition-[padding,background-color,border-color] duration-300",
        isScrolled
          ? "border-b border-white/10 bg-black/80 py-4 backdrop-blur-md"
          : "border-b border-transparent pt-6 md:pt-10"
      )}>
      <Container className="flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 xl:w-[35%] md:w-[30%] w-fit">
          <img id="litigon-navbar-logo" src={litigonLogo} alt="Litigon" className="h-[26px] w-auto" />
        </Link>

        {/* <!-- Mobile --> */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher compact />
          <Sheet
            open={isOpen}
            onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <div
                className="cursor-pointer lg:hidden text-white h-11 w-11 flex items-center justify-center">
                <Menu
                  className="w-6 h-6"
                />
              </div>
            </SheetTrigger>

            <SheetContent
              className="flex flex-col justify-between bg-black border-foreground"
            >
              <div className="h-full flex flex-col">
                <SheetHeader className="flex flex-row justify-between border-b border-foreground">
                  <SheetTitle className="flex items-center">
                    <Link to="/" className="flex items-center" onClick={closeSheet}>
                      <img src={litigonLogo} alt="Litigon" className="h-5 w-auto" />
                    </Link>
                  </SheetTitle>
                  <div className="flex items-center gap-2">
                    <SheetPrimitive.Close
                      className="h-11 w-11 flex items-center justify-center data-[state=open]:bg-white right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 disabled:pointer-events-none">
                      <XIcon className="size-5 text-white" />
                      <span className="sr-only">Close</span>
                    </SheetPrimitive.Close>
                  </div>
                </SheetHeader>
                <div className="px-5 py-6 flex flex-col h-full justify-between flex-1 overflow-y-auto">
                  <div className="flex flex-col gap-2">
                    {pages.map((page) => {
                      const isActive = page.href === "/" ? location.pathname === "/" : location.pathname.startsWith(page.href);
                      return (
                        <Link key={page.href} to={page.href} onClick={closeSheet} className={cn("block whitespace-nowrap py-2 transition-colors", isActive ? "text-primary border-b border-primary" : "text-muted hover:text-primary")}>
                          {page.name}
                        </Link>
                      );
                    })}
                    <Button asChild variant="gray" size="default" className="mt-4 w-full">
                      <Link to="/contact" onClick={closeSheet}>Plan your event</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* <!-- Desktop --> */}
        <NavigationMenu className="hidden lg:block mx-auto" dir={locale === "ar" ? "rtl" : "ltr"}>
          <NavigationMenuList className="gap-1" dir={locale === "ar" ? "rtl" : "ltr"}>
            {pages.map((page) => {
              const isActive = page.href === "/" ? location.pathname === "/" : location.pathname.startsWith(page.href);
              return (
                <NavigationMenuItem key={page.href}>
                  <NavigationMenuLink asChild>
                    <Link to={page.href} className={cn("whitespace-nowrap px-2 py-2 transition-colors xl:px-3", isActive ? "text-primary border-b-2 border-primary" : "text-white hover:text-primary")}>
                      {page.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:flex gap-2 items-center xl:w-[35%] md:w-[30%] w-fit justify-end">
          <LanguageSwitcher />
          <Button asChild variant="gray" size="default">
            <Link to="/contact">Plan your event</Link>
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
