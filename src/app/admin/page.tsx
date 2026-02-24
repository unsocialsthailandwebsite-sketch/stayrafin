export default function AdminDashboard() {


    return (
        <div>
            <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8">Overview</h2>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Total Properties</p>
                    <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-stayra-charcoal">2</span>
                        <span className="text-sm text-green-600">+0 this month</span>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Recent Inquiries</p>
                    <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-stayra-charcoal">0</span>
                        <span className="text-sm text-gray-400">awaiting response</span>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Total Reviews</p>
                    <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-stayra-charcoal">0</span>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-64 flex flex-col items-center justify-center text-center text-gray-400">
                    Recent Activity Feed (Coming Soon)
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-64 flex flex-col items-center justify-center text-center text-gray-400">
                    System Status: Online
                </div>
            </div>
        </div>
    )
}
