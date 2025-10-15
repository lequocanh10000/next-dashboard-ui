'use client'

const Annoucement = () => {
    return (
        <div className="bg-white p-4 rounded-md">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Annoucement</h1>
                <span className="texy-xs text-gray-400">View All</span>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                <div className="bg-lamaSkyLight round-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">Discuss student progress with parents.</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-01-01</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">Uia</p>
                </div>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                <div className="bg-lamaPurpleLight round-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">Discuss student progress with parents.</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-01-01</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">Uib</p>
                </div>
            </div>
        </div>
    )
}

export default Annoucement