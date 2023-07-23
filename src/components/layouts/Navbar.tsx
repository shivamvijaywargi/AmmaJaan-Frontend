'use client';

import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuTriggerNoIcon,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Image from 'next/image';
import { SITE_TITLE } from '@/configs/site';
import { Heart, Menu, ShoppingBag, ShoppingCart, User2 } from 'lucide-react';
import { Input } from '../ui/input';
import { Button, buttonVariants } from '../ui/button';
import useAuthStore, { useAccessToken } from '@/stores/authStore';
import NotLoggedInNav from './NotLoggedInNavItem';
import LoggedInNavItem from './LoggedInNavItem';
// import { Icons } from '@/components/icons';

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
];

export default function Navbar() {
  const token = useAccessToken();

  return (
    <header className="border-b-2 bg-white">
      <div className="border-b-2 py-3">
        {/* Main Menu */}
        <NavigationMenu className="justify-start max-w-7xl mx-auto">
          <NavigationMenuList className="px-2 md:pl-1 md:pr-4 flex justify-between max-w-7xl w-screen">
            {/* Mobile Nav - Hamburger Menu */}
            <div className="flex lg:block">
              <NavigationMenuItem className="lg:hidden z-10">
                <NavigationMenuTriggerNoIcon className="px-2 md:px-4">
                  <Menu />
                </NavigationMenuTriggerNoIcon>
                <NavigationMenuContent>
                  <ul className="grid w-[375px] gap-3 p-4">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href={'/'} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      '-ml-4 md:-ml-0'
                    )}
                  >
                    <Image
                      src={'/ammajaan-logo.svg'}
                      alt="AmmaJaan"
                      width="20"
                      height="20"
                      className="mr-2"
                    />
                    {SITE_TITLE}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </div>
            {/* Search Box */}
            <div>
              <NavigationMenuItem className="hidden md:flex">
                <Input
                  type="text"
                  name="search"
                  id="search"
                  className="w-96 max-w-lg"
                  placeholder="Search"
                  autoComplete="off"
                />
                <Button>Search</Button>
              </NavigationMenuItem>
            </div>
            {/* Mobile Nav icons */}
            <div className="flex lg:hidden">
              <NavigationMenuItem className="mr-3">
                <Link href={'/cart'} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      '-ml-4 md:-ml-0'
                    )}
                  >
                    <ShoppingCart />
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href={'/profile'} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      '-ml-4 md:-ml-0'
                    )}
                  >
                    <User2 />
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </div>

            {/* Desktop Nav icons */}
            <div className="hidden lg:flex text-gray-700 space-x-4">
              <NavigationMenuItem>
                <Link href={'/wishlist'} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'flex flex-col justify-center items-center h-14 w-14'
                    )}
                  >
                    <ShoppingBag />
                    Wishlist
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                {/* <Link
                  href={token ? '/profile' : '/login'}
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'flex flex-col justify-center items-center h-14 w-14'
                    )}
                  >
                    <User2 />
                    {token ? 'Profile' : 'Login'}
                  </NavigationMenuLink>
                </Link> */}
                {token ? <LoggedInNavItem /> : <NotLoggedInNav />}
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href={'/orders'} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'flex flex-col justify-center items-center h-14 w-14'
                    )}
                  >
                    <Heart />
                    Orders
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href={'/cart'} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'flex flex-col justify-center items-center h-14 w-14'
                    )}
                  >
                    <ShoppingCart />
                    Cart
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Second Menu with categories and other links */}
      <NavigationMenu className="justify-start max-w-7xl mx-auto">
        <NavigationMenuList className="px-1 hidden lg:flex">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/hot-offers" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Hot Offers
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/newly-launched" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Newly Launched
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/best-sellers" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Best Sellers
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
