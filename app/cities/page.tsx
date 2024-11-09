import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface CityCardProps {
    name: string
    description: string
    imageUrl: string
}

function CityCard({ name, description, imageUrl }: CityCardProps) {
    return (
        <Card className="overflow-hidden">
            <Image
                src={imageUrl}
                alt={`${name} space`}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
            />
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardFooter>
                <Link href={`/availability?city=${encodeURIComponent(name)}`} className="w-full">
                    <Button className="w-full">View Availability</Button>
                </Link>
            </CardFooter>
        </Card>
    )
}

export default function CitiesPage() {
    const cities = [
        {
            name: "New York",
            description: "Modern coworking spaces in the heart of Manhattan",
            imageUrl: "/placeholder.svg?height=200&width=400"
        },
        {
            name: "San Francisco",
            description: "Tech-friendly residences with stunning Bay views",
            imageUrl: "/placeholder.svg?height=200&width=400"
        },
        {
            name: "Lisbon",
            description: "Charming apartments in historic Alfama district",
            imageUrl: "/placeholder.svg?height=200&width=400"
        },
        {
            name: "Dubai",
            description: "Luxurious living spaces with world-class amenities",
            imageUrl: "/placeholder.svg?height=200&width=400"
        }
    ]

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Cities</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cities.map((city) => (
                    <CityCard key={city.name} {...city} />
                ))}
            </div>
        </div>
    )
}