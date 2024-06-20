'use client';

import { NavWrapper } from '@/styled/Navbar/Navbar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Navbar() {
    const pathName = usePathname();

    return (
        <NavWrapper>
            <li>
                <Link
                    href="/"
                    style={{
                        color:
                            pathName === '/'
                                ? 'rgba(30, 100, 250, 0.85)'
                                : 'rgba(255, 255, 255, 0.8)',
                    }}
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    href="/search"
                    style={{
                        color:
                            pathName === '/search'
                                ? 'rgba(30, 100, 250, 0.85)'
                                : 'rgba(255, 255, 255, 0.8)',
                    }}
                >
                    Search
                </Link>
            </li>
        </NavWrapper>
    );
}
