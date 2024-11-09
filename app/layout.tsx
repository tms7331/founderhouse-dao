import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from '@/components/Navbar';
import { cx } from 'class-variance-authority';
import { Shell } from '@/shell';
import "./globals.css";

import '../css/fonts.css';

const title = localFont({
  src: '../fonts/conthrax/regular.otf',
  variable: '--font-title',
  weight: '400',
  style: 'normal'
});

const slab = localFont({
  src: '../fonts/armstrong3/regular.otf',
  variable: '--font-slab',
  weight: '400',
  style: 'normal'
});

const sans = localFont({
  src: '../fonts/toxigenesis/regular.otf',
  variable: '--font-sans',
  weight: '400',
  style: 'normal'
});

export const metadata: Metadata = {
  title: "Founderhouse DAO",
  description: "An exclusive community for founders to live and cowork in cities around the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cx(
          title.variable,
          slab.variable,
          sans.variable,
          'antialiased'
        )}
      >

        <Shell><Navbar />{children}</Shell>
      </body>
    </html>
  );
}




/*
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import AuthProvider from '@/components/AuthProvider';
import localFont from 'next/font/local';
import { cx } from 'class-variance-authority';
import { Shell } from '@/shell';

import '@/css/reset.css';
import '@/css/globals.css';

import pkg from '../package.json';

const title = localFont({
  src: '../fonts/conthrax/regular.otf',
  variable: '--font-title',
  weight: '400',
  style: 'normal'
});

const slab = localFont({
  src: '../fonts/armstrong3/regular.otf',
  variable: '--font-slab',
  weight: '400',
  style: 'normal'
});

const sans = localFont({
  src: '../fonts/toxigenesis/regular.otf',
  variable: '--font-sans',
  weight: '400',
  style: 'normal'
});

import '../css/fonts.css';
import { ComponentsHead } from '@/components/head';

export const metadata: Metadata = {
  title: pkg.name.slice(0, 1).toUpperCase() + pkg.name.slice(1),
  description: pkg.description
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <ComponentsHead />
        <body
          className={cx(
            title.variable,
            slab.variable,
            sans.variable,
            'antialiased'
          )}
        >
          <Shell>{children}</Shell>
          <Toaster />
        </body>
      </html>
    </AuthProvider>
  );
}

*/