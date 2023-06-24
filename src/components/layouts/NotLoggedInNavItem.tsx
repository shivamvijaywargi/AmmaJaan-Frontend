import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, User2 } from 'lucide-react';
import Link from 'next/link';

const NotLoggedInNavItem = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex flex-col items-center justify-center text-sm mt-1">
        <User2 />
        <div className="flex items-center justify-center font-medium">
          Account <ChevronDown className="h-4 w-4 " />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={'/login'} className="w-full">
            Login
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={'/register'} className="w-full">
            Register
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotLoggedInNavItem;
