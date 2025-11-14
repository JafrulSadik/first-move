import ReactPaginate from 'react-paginate'

export default function Pagination({ pageCount, onPageChange }) {
  return (
    <div className="flex justify-center">
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        previousLabel=""
        pageCount={pageCount}
        onPageChange={onPageChange}
        containerClassName="flex items-center gap-4"
        pageClassName="cursor-pointer"
        pageLinkClassName="px-4 py-2 rounded-md text-[#c59d57] font-semibold"
        activeLinkClassName="bg-[#c59d57] text-white rounded-md"
        activeClassName="bg-[#c59d57] text-white rounded-md"
        renderOnZeroPageCount={null}
      />
    </div>
  )
}
