import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HowItWorks() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-4xl font-bold mb-6 text-center">How It Works</h1>

            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>Introducing Founderhouse DAO</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg mb-4">
                        Founderhouse DAO is the ultimate hub for early-stage founders and investors looking to connect, collaborate, and grow together. We know it's challenging for founders to capture investor attention and receive timely feedback on their startups. Similarly, investors often struggle to identify and connect with high-potential founders.
                    </p>
                    <p className="text-lg">
                        Founderhouse DAO brings founders and investors into a collaborative, purpose-driven workspace designed to maximize productivity and networking. With curated events and a dedicated environment, we align incentives to ensure that both founders and investors gain real, actionable value from each interaction, creating a community built for long-term success.
                    </p>
                </CardContent>
            </Card>

            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>The Process</CardTitle>
                </CardHeader>
                <CardContent>
                    <ol className="list-decimal list-inside space-y-4">
                        <li className="text-lg">Any member can propose a pop-up community event, centered around a specific theme.</li>
                        <li className="text-lg">Founders and investors can signal interest in attending a proposed event.</li>
                        <li className="text-lg">If the event gains enough interest, it will be scheduled, and a capacity determined.</li>
                        <li className="text-lg">Investors will participate in an auction for 20% of spots reserved for them.</li>
                        <li className="text-lg">The event will be run at cost, so if the investor auctions attract enough money, the event could be free to attend for founders.</li>
                        <li className="text-lg">Founders apply to attend the event, and the investors who won the auction will choose who actually attends.</li>
                    </ol>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>How the DAO Makes Money</CardTitle>
                </CardHeader>
                <CardContent>
                    <h3 className="text-xl font-semibold mb-2">Revenue Streams</h3>
                    <ul className="list-disc list-inside space-y-2 mb-4">
                        <li>We take 5% equity from the investor, on any deal made via community events.</li>
                        <li>We take 1% equity from founders, once a project started at a community event raises over 10 million.</li>
                    </ul>
                    <h3 className="text-xl font-semibold mb-2">Ownership</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Ownership shares of the DAO will be distributed based on members adding value by organizing events and successfully building products.</li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    )
}