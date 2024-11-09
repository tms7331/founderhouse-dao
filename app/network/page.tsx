import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, MapPinIcon } from "lucide-react"

// Sample data for network members
const networkMembers = [
    {
        name: "Alice Johnson",
        bio: "Tech entrepreneur with a passion for AI and machine learning.",
        image: "/placeholder.svg?height=100&width=100",
        interests: ["AI", "Machine Learning", "Startups"],
        currentStartup: "AInnova",
        problemsSolved: ["Developed an AI-powered customer service chatbot"],
        problemsFaced: ["Scaling infrastructure for growing user base"],
        upcomingStays: [
            { place: "San Francisco", dates: "Aug 15-28, 2025" },
            { place: "New York", dates: "Sep 5-25, 2025" }
        ]
    },
    {
        name: "Bob Smith",
        bio: "Experienced software engineer specializing in blockchain technology.",
        image: "/placeholder.svg?height=100&width=100",
        interests: ["Blockchain", "Cryptocurrency", "Smart Contracts"],
        currentStartup: "BlockChain Solutions",
        problemsSolved: ["Implemented a secure voting system on blockchain"],
        problemsFaced: ["Regulatory challenges in different countries"],
        upcomingStays: [
            { place: "Dubai", dates: "Jul 1-15, 2025" },
            { place: "Lisbon", dates: "Jul 10-20, 2025" }
        ]
    },
    {
        name: "Carol Davis",
        bio: "UX/UI designer with a focus on creating intuitive mobile experiences.",
        image: "/placeholder.svg?height=100&width=100",
        interests: ["UX Design", "Mobile Apps", "User Research"],
        currentStartup: "MobileUX",
        problemsSolved: ["Redesigned app interface, increasing user engagement by 40%"],
        problemsFaced: ["Balancing aesthetics with performance on low-end devices"],
        upcomingStays: [
            { place: "Lisbon", dates: "Aug 1-14, 2025" },
            { place: "New York", dates: "Aug 10-25, 2025" }
        ]
    }
]

// Sample data for current user's project
const currentUserProject = {
    name: "TechInnovate",
    interests: ["AI", "Mobile Apps", "User Research"],
    problemsSolved: ["Implemented machine learning model for personalized recommendations"],
    problemsFaced: ["Optimizing app performance on various devices"]
}

// Function to generate synergy sentence
function generateSynergySentence(member, currentUserProject) {
    const commonInterests = member.interests.filter(interest =>
        currentUserProject.interests.includes(interest)
    )

    if (commonInterests.length > 0) {
        return `${currentUserProject.name} and ${member.currentStartup} share interests in ${commonInterests.join(', ')}, presenting opportunities for collaborative innovation.`
    } else {
        return `${currentUserProject.name} and ${member.currentStartup} have complementary skills that could lead to innovative cross-domain solutions.`
    }
}

export default function Component() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Network</h1>
            <div className="grid grid-cols-1 gap-6">
                {networkMembers.map((member, index) => {
                    const synergySentence = generateSynergySentence(member, currentUserProject)
                    return (
                        <Card key={index} className="flex flex-col lg:flex-row h-full">
                            <div className="flex-grow">
                                <CardHeader>
                                    <div className="flex items-center space-x-4">
                                        <Avatar className="w-12 h-12">
                                            <AvatarImage src={member.image} alt={member.name} />
                                            <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                        </Avatar>
                                        <CardTitle>{member.name}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">{member.bio}</p>
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="font-semibold">Areas of Interest:</h3>
                                            <div className="flex flex-wrap gap-2 mt-1">
                                                {member.interests.map((interest, i) => (
                                                    <Badge key={i} variant="secondary">{interest}</Badge>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Current Startup:</h3>
                                            <p>{member.currentStartup}</p>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Problems Solved:</h3>
                                            <ul className="list-disc list-inside">
                                                {member.problemsSolved.map((problem, i) => (
                                                    <li key={i}>{problem}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Problems Faced:</h3>
                                            <ul className="list-disc list-inside">
                                                {member.problemsFaced.map((problem, i) => (
                                                    <li key={i}>{problem}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                            </div>
                            <div className="lg:w-1/3 p-6 bg-muted flex flex-col justify-between">
                                <div className="mb-6">
                                    <h3 className="font-semibold mb-2">Synergy</h3>
                                    <p className="text-sm text-muted-foreground">{synergySentence}</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Upcoming Stays</h3>
                                    <ul className="space-y-2">
                                        {member.upcomingStays.map((stay, index) => (
                                            <li key={index} className="flex items-start space-x-2">
                                                <MapPinIcon className="w-4 h-4 mt-1 text-muted-foreground" />
                                                <div>
                                                    <p className="font-medium">{stay.place}</p>
                                                    <div className="flex items-center text-sm text-muted-foreground">
                                                        <CalendarIcon className="w-3 h-3 mr-1" />
                                                        <span>{stay.dates}</span>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}