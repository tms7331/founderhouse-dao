"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)

    const menuItems = [
        { label: "Join", href: "/join" },
        { label: "My Account", href: "/myaccount" },
        { label: "My Reservations", href: "/myreservations" },
        { label: "Cities", href: "/cities" },
        { label: "Network", href: "/network" },
    ]

    return (
        <nav className="bg-background border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold text-primary">
                            Founderhouse DAO
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">Menu</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                {menuItems.map((item) => (
                                    <DropdownMenuItem key={item.href} asChild>
                                        <Link href={item.href}>{item.label}</Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="md:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Open menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <nav className="flex flex-col gap-4">
                                    {menuItems.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className="text-lg font-medium"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    )
}