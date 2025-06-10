export default function HowItWorksBusiness() {
    return (
        <section className="w-full">
            <div className="container px-4 md:px-6">
                <div className="space-y-4 text-left">
                    <div className="space-y-2">
                        <h2 className=" text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2C2F8F]">
                            No More Spreadsheets or Gut Feelings
                        </h2>
                    </div>
                </div>
                <div className="mx-auto mt-12 max-w-7xl">
                    <div className="grid gap-8 mt-24 md:grid-cols-3">
                        <div
                            className="flex flex-col space-y-4">
                            <div
                                className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2C2F8F] text-primary-foreground text-xl font-bold shadow-lg">
                                01
                            </div>
                            <h3 className="text-xl text-left font-bold">Connect</h3>
                            <p className="font-medium text-muted-foreground text-left">API integration in less than 1
                                hour (or use our no-code dashboard)</p>
                        </div>
                        <div
                            className="flex flex-col space-y-4">
                            <div
                                className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2C2F8F] text-primary-foreground text-xl font-bold shadow-lg">
                                02
                            </div>
                            <h3 className="text-xl text-left font-bold">Configure</h3>
                            <p className="font-medium text-muted-foreground text-left">Set risk thresholds: 'Auto-reject
                                if PEP match >85%</p>
                        </div>
                        <div
                            className="flex flex-col space-y-4">
                            <div
                                className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2C2F8F] text-primary-foreground text-xl font-bold shadow-lg">
                                03
                            </div>
                            <h3 className="text-xl font-bold text-left">Sleep Easy</h3>
                            <p className="font-medium text-muted-foreground text-left">Get real-time alerts when risk
                                scores change</p>
                        </div>
                    </div>
                    <button
                        className=" mt-8 border bg-[#2c2f8f] border-white text-white px-6 py-3 rounded  cursor-pointer hover:scale-105 transition shadow">
                        Talk to Fraud Expert
                    </button>

                </div>
            </div>
        </section>
    )
}