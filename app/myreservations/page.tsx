'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'

// Mock data for reservations
const reservations = [
    { id: 1, city: "New York", dates: "January 15-20, 2025", status: "upcoming", details: "5-night stay at The Plaza Hotel" },
    { id: 2, city: "San Francisco", dates: "December 1-5, 2024", status: "upcoming", details: "4-night stay at The Fairmont San Francisco" },
    { id: 3, city: "Lisbon", dates: "July 1-7, 2023", status: "past", details: "6-night stay at Tivoli Avenida Liberdade Lisboa" },
]

export default function ReservationsPage() {
    //const [selectedReservation, setSelectedReservation] = useState(null)

    const getStatusColor = (status) => {
        switch (status) {
            case 'upcoming':
                return 'bg-green-500'
            case 'past':
                return 'bg-gray-500'
            case 'cancelled':
                return 'bg-red-500'
            default:
                return 'bg-blue-500'
        }
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">My Reservations</h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {reservations.map((reservation) => (
                    <Card key={reservation.id}>
                        <CardHeader>
                            <CardTitle>{reservation.city}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>{reservation.dates}</p>
                            <Badge className={`mt-2 ${getStatusColor(reservation.status)}`}>
                                {reservation.status}
                            </Badge>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Link href={`/eventdetails`} passHref>
                                <Button variant="outline">View Details</Button>
                            </Link>
                            <Button>Auction Reservation</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}