'use client'
import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Correct import for navigation hook
import { Home, History, WalletCardsIcon, Settings2Icon } from 'lucide-react';
import Link from 'next/link';

const SidenNav = () => {
    const Menulist = [
        {
            name: 'Home',
            icon: Home,
            path: '/dashboard',
        },
        {
            name: 'History',
            icon: History,
            path: '/dashboard/history',
        },
        {
            name: 'Billing',
            icon: WalletCardsIcon,
            path: '/dashboard/billing',
        },
        {
            name: 'Settings',
            icon: Settings2Icon,
            path: '/dashboard/settings',
        },
    ];

    const path = usePathname(); // Correct usage of usePathname for Server Components

    return (
        <div className="h-screen bg-white p-5 border shadow-sm">
            <div className="flex justify-center">
                <Image src="/logo.svg" alt="logo" width={100} height={100} />
                <hr className="my-5" />
            </div>
            <div>
                {Menulist.map((menu, index) => (
                     <Link href={menu.path}>
                    <div
                        key={index}
                        className={`flex mt-4 items-center gap-2 mb-2 p-3 hover:bg-primary cursor-pointer hover:text-white rounded-lg ${
                            path === menu.path ? 'bg-primary text-white' : ''
                        }`}
                    >
                      
                       <menu.icon className="h-6 w-6" />
                     
                        <h2>{menu.name}</h2>
                   
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SidenNav;
