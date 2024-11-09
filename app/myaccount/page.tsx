'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
    const [user, setUser] = useState({
        name: "Jane Doe",
        areasOfInterest: "AI, Blockchain, Sustainability",
        currentStartup: "EcoTech Solutions",
        problemsSolved: "Optimized supply chain logistics, Reduced carbon footprint by 30%",
        problemsFaced: "Scaling customer support, Navigating regulatory challenges"
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setUser(prevUser => ({ ...prevUser, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the updated user data to your backend
        console.log('Updated user data:', user)
        // You can add logic here to show a success message or handle errors
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">My Account</h1>
            <form onSubmit={handleSubmit}>
                <div className="grid gap-6 mb-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Personal Information</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Input
                                name="name"
                                value={user.name}
                                onChange={handleInputChange}
                                placeholder="Your Name"
                            />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Areas of Interest</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Input
                                name="areasOfInterest"
                                value={user.areasOfInterest}
                                onChange={handleInputChange}
                                placeholder="AI, Blockchain, Sustainability"
                            />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Current Startup</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Input
                                name="currentStartup"
                                value={user.currentStartup}
                                onChange={handleInputChange}
                                placeholder="Your Current Startup"
                            />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Problems Solved and Faced</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <label htmlFor="problemsSolved" className="block text-sm font-medium text-gray-700 mb-1">
                                    Problems Solved:
                                </label>
                                <Textarea
                                    id="problemsSolved"
                                    name="problemsSolved"
                                    value={user.problemsSolved}
                                    onChange={handleInputChange}
                                    placeholder="List problems you've solved"
                                    rows={3}
                                />
                            </div>
                            <div>
                                <label htmlFor="problemsFaced" className="block text-sm font-medium text-gray-700 mb-1">
                                    Problems Faced:
                                </label>
                                <Textarea
                                    id="problemsFaced"
                                    name="problemsFaced"
                                    value={user.problemsFaced}
                                    onChange={handleInputChange}
                                    placeholder="List problems you're facing"
                                    rows={3}
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Button type="submit" className="w-full">
                    Update
                </Button>
            </form>
        </div>
    )
}