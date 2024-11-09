import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900 text-white p-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">Founderhouse DAO</h1>
        <p className="text-xl mb-8">
          Welcome to Founderhouse DAO - Soho House for Founders. We're a network of living and coworking spaces designed exclusively for entrepreneurs and early stage investors. Buy a membership to gain access to our premium locations and connect with a vibrant community of like-minded founders. Whether you're looking for a place to stay, work, or network, Founderhouse DAO has you covered.
        </p>
        <Link href="/join" passHref>
          <Button className="bg-white text-gray-800 hover:bg-gray-100 text-lg py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Join Now
          </Button>
        </Link>
      </div>
    </div>
  )
}