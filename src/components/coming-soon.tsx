import { Clock, } from "lucide-react"

export default function ComingSoon() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
            <div className="max-w-5xl mx-auto text-center space-y-8">
                {/* Logo/Brand */}
                <div className="space-y-4">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto">
                        <Clock className="w-8 h-8 text-purple-600" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Coming Soon</h1>
                </div>

                {/* Main Message */}
                <div className="space-y-4">
                    <p className="text-xl md:text-7xl text-purple-200 font-light">Great Things Take Time</p>
                </div>


                {/* Footer */}
                <div className="pt-8 border-t border-white/10">
                    <p className="text-gray-400 text-sm">© 2025 QuarkfinAI. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}
