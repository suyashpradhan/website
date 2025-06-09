import {BarChart3, Code, Settings} from "lucide-react";

export default function HowItWorks() {
    return (
        <section className="w-full">
            <div className="container px-4 md:px-6">
                <div className="space-y-4 text-left">
                    <div className="space-y-2">
                        <h2 className=" text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2C2F8F]">
                            From Chaos to Control in 30 Minutes
                        </h2>
                    </div>
                </div>
                <div className="mx-auto mt-12 max-w-7xl">
                    <div className="grid gap-8 mt-24 md:grid-cols-3">
                        <div
                            className="flex flex-col space-y-4">
                            <div
                                className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2C2F8F] text-white">
                                <Code className="h-8 w-8"/>
                            </div>
                            <h3 className="text-xl text-left font-bold">Connect</h3>
                            <p className="font-medium text-muted-foreground text-left">Add our API/SDK. Docs loved by
                                developers.</p>
                        </div>
                        <div
                            className="flex flex-col space-y-4">
                            <div
                                className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2C2F8F] text-white">
                                <Settings className="h-8 w-8"/>
                            </div>
                            <h3 className="text-xl text-left font-bold">Configure</h3>
                            <p className="font-medium text-muted-foreground text-left">Set risk rules in plain English,
                                or use our
                                defaults.</p>
                        </div>
                        <div
                            className="flex flex-col space-y-4">
                            <div
                                className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2C2F8F] text-white">
                                <BarChart3 className="h-8 w-8"/>
                            </div>
                            <h3 className="text-xl font-bold text-left">Grow</h3>
                            <p className="font-medium text-muted-foreground text-left">Watch fraud drop & conversions
                                rise.
                                Real-time alerts
                                included.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}