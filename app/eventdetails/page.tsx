'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function Component() {
    const [tokensRemaining, setTokensRemaining] = useState(1000)
    const [inputs, setInputs] = useState({
        'John Doe': '',
        'Jane Smith': '',
        'Bob Johnson': '',
        'Alice Williams': '',
    })

    const handleInputChange = (name: string, value: string) => {
        const numValue = parseInt(value) || 0
        const oldValue = parseInt(inputs[name]) || 0
        const difference = numValue - oldValue

        setInputs(prev => ({ ...prev, [name]: value }))
        setTokensRemaining(prev => Math.max(0, prev - difference))
    }

    const handleAirdrop = () => {
        console.log('Airdrop initiated with the following distribution:')
        Object.entries(inputs).forEach(([name, value]) => {
            if (value) {
                console.log(`${name}: ${value} tokens`)
            }
        })
        // Here you would typically call an API to process the airdrop
        alert('Airdrop processed successfully!')
    }

    const totalAllocated = Object.values(inputs).reduce((sum, value) => sum + (parseInt(value) || 0), 0)

    return (
        <div className="container mx-auto p-4">
            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>Event Details</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg font-semibold">City: New York</p>
                    <p className="text-lg">Dates: August 15-17, 2023</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Airdrop Gratitude</CardTitle>
                    <p className="text-lg font-semibold">Tokens Remaining: {tokensRemaining}</p>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {Object.entries(inputs).map(([name, value]) => (
                            <div key={name} className="flex items-center space-x-4">
                                <Label htmlFor={name} className="w-40">{name}</Label>
                                <Input
                                    type="number"
                                    id={name}
                                    value={value}
                                    onChange={(e) => handleInputChange(name, e.target.value)}
                                    min="0"
                                    max={tokensRemaining + (parseInt(value) || 0)}
                                    className="w-24"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="mt-6">
                        <Button
                            onClick={handleAirdrop}
                            disabled={totalAllocated === 0}
                        >
                            Airdrop
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}