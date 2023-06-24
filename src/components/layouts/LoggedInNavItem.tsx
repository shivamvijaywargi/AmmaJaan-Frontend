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
import { logoutUserFn } from '@/api/authApi';
import Logout from '../auth/Logout';

const LoggedInNavItem = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex flex-col items-center text-sm mt-1">
        <User2 />
        <div className="flex items-center justify-center font-medium">
          Account <ChevronDown className="h-4 w-4 " />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={'/profile'} className="w-full">
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => logoutUserFn()}>
          <Logout />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LoggedInNavItem;
