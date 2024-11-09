'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

export default function JoinPage() {
    const [membershipType, setMembershipType] = useState<string | undefined>(undefined)

    return (
        <div className="container mx-auto px-4 py-8">
            <Card className="w-full max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center">Apply to Founderhouse DAO</CardTitle>
                    <CardDescription className="text-center">Choose your membership type and fill out the form below</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="space-y-6">
                            <RadioGroup onValueChange={setMembershipType} className="space-y-4">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="mentor" id="mentor" />
                                    <Label htmlFor="mentor" className="font-medium">
                                        Investor Membership
                                        <p className="text-sm text-muted-foreground">Find the next unicorn on day one.  Give 5% equity of any deal made via community events back to the community</p>
                                    </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="normal" id="normal" />
                                    <Label htmlFor="normal" className="font-medium">
                                        Founder Membership
                                        <p className="text-sm text-muted-foreground">Join the community of founders.  Give 1% of your equity above 10 million back to the community</p>
                                    </Label>
                                </div>
                            </RadioGroup>

                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="Your full name" required />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="your@email.com" required />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="github">GitHub Profile</Label>
                                <Input id="github" placeholder="https://github.com/yourusername" required />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="startup">Current Startup</Label>
                                <Input id="startup" placeholder="Your current startup or project" required />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="reason">Why do you want to join?</Label>
                                <Textarea id="reason" placeholder="Tell us why you'd like to join Founderhouse Dao" required />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" type="submit">Submit Application</Button>
                </CardFooter>
            </Card>
        </div>
    )
}