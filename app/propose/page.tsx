'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [theme, setTheme] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [message, setMessage] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setMessage('')

        // Simulate API call
        setTimeout(() => {
            console.log({ location, description, theme })
            setIsSubmitting(false)
            setMessage('Your community proposal has been submitted successfully.')
            setLocation('')
            setDescription('')
            setTheme('')
        }, 1000)
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Propose a Community Event</h1>
            <Card className="w-full max-w-2xl mx-auto">
                <CardHeader>
                    <CardDescription>Fill out the form below to suggest a new community.</CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="location">Location</Label>
                            <Input
                                id="location"
                                placeholder="Enter the community location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                required
                                minLength={2}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                placeholder="Describe your community"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                                minLength={10}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="theme">Theme</Label>
                            <Input
                                id="theme"
                                placeholder="Enter the community theme"
                                value={theme}
                                onChange={(e) => setTheme(e.target.value)}
                                required
                                minLength={2}
                            />
                        </div>
                    </CardContent>
                    <div className="flex flex-col items-start gap-4 p-4"> {/* Added a div for better styling */}
                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                            {isSubmitting ? "Submitting..." : "Submit Proposal"}
                        </Button>
                        {message && <p className="text-green-600">{message}</p>}
                    </div> {/* Added a div for better styling */}
                </form>
            </Card>
        </div>
    )
}