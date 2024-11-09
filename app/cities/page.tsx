import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface CityCardProps {
    name: string
    description: string
    imageUrl: string
    dateRange: string
}

function CityCard({ name, description, imageUrl, dateRange }: CityCardProps) {
    return (
        <Card className="overflow-hidden flex flex-col">
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
            <CardContent className="flex-grow">
                <p className="text-sm font-medium text-primary">{dateRange}</p>
            </CardContent>
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
            description: "Connect the world to stablecoins from modern coworking spaces in Brooklyn",
            imageUrl: "/nyc.png?height=200&width=400",
            dateRange: "December 1 to December 30, 2024"
        },
        {
            name: "San Francisco",
            description: "Build the next AI unicorn in a modern coworking space in the heart of San Francisco",
            imageUrl: "/sf.png?height=200&width=400",
            dateRange: "February 15 to March 15, 2025"
        },
        {
            name: "Lisbon",
            description: "Live in charming apartments in historic Alfama district while building your company that takes memecoins to the masses",
            imageUrl: "/lisbon.png?height=200&width=400",
            dateRange: "July 15 to September 15, 2025"
        },
        {
            name: "Dubai",
            description: "Build the next iteration of decentralized finance from the Marina District",
            imageUrl: "/dubai.png?height=200&width=400",
            dateRange: "August 20 to September 20, 2025"
        }
    ]

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Pop-up Communities</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cities.map((city) => (
                    <CityCard key={city.name} {...city} />
                ))}
            </div>
        </div>
    )
}