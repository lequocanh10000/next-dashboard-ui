import Pagination from "@/components/pagination"
import Table from "@/components/table"
import TableSearch from "@/components/table-search"
import Image from "next/image"

const columns = [
    {
        header: 'Info',
        accessor: 'info'
    },
    {
        header: 'Teacher Id',
        accessor: 'teacherId',
        className: 'hidden md: table-cell'
    },
    {
        header: 'Subjects',
        accessor: 'subjects',
        className: 'hidden md: table-cell'
    },
    {
        header: 'Classes',
        accessor: 'classes',
        className: 'hidden md: table-cell'
    },
    {
        header: 'Phone',
        accessor: 'phone',
        className: 'hidden lg: table-cell'
    },
    {
        header: 'Address',
        accessor: 'address',
        className: 'hidden lg: table-cell'
    },
    {
        header: 'Actions',
        accessor: 'actions',
        className: 'hidden lg: table-cell'
    },
]

const TeacherList = () => {
    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
            {/* TOP */}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold">All teachers</h1>
                <div className="fex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <TableSearch/>
                    <div className="flex items-center gap-4 self-end">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                           <Image src="/filter.png" alt="" width={14} height={14}/>
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                           <Image src="/sort.png" alt="" width={14} height={14}/>
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                           <Image src="/plus.png" alt="" width={14} height={14}/>
                        </button>
                    </div>
                </div>
            </div>
            {/* LIST */}
            <div className="">
                <Table columns={columns}/>
            </div>
            {/* PAGINATION */}
            <div className="">
                <Pagination/>
            </div>
        </div>
    )
}

export default TeacherList