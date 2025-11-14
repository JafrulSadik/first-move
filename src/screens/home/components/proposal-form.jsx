export default function ProposalForm() {
  return (
    <form action="" className="flex justify-center w-full">
      <div className="grid w-[90%] max-w-3xl grid-cols-12 grid-rows-7 gap-4">
        <div className="col-span-6 row-span-1">
          <input
            type="text"
            className="w-full rounded-md border border-[#E4D4B4] bg-[#FBF7E2] p-3 font-normal text-[#626262] outline-none md:rounded-lg md:p-4 md:font-bold"
            placeholder="Full name"
          />
        </div>
        <div className="col-span-6 row-span-1">
          <input
            type="text"
            className="w-full rounded-md border border-[#E4D4B4] bg-[#FBF7E2] p-3 font-normal text-[#626262] outline-none md:rounded-lg md:p-4 md:font-bold"
            placeholder="Company"
          />
        </div>
        <div className="col-span-6 row-span-1">
          <input
            type="text"
            className="w-full rounded-md border border-[#E4D4B4] bg-[#FBF7E2] p-3 font-normal text-[#626262] outline-none md:rounded-lg md:p-4 md:font-bold"
            placeholder="Email"
          />
        </div>
        <div className="col-span-6 row-span-1">
          <input
            type="text"
            className="w-full rounded-md border border-[#E4D4B4] bg-[#FBF7E2] p-3 font-normal text-[#626262] outline-none md:rounded-lg md:p-4 md:font-bold"
            placeholder="Phone / WhatsApp"
          />
        </div>
        <div className="col-span-12 row-span-1">
          <select
            className="w-full rounded-md border border-[#E4D4B4] bg-[#FBF7E2] p-3 font-normal text-[#626262] outline-none md:rounded-lg md:p-4 md:font-bold"
            placeholder="Hospitality Manpower"
          >
            <option>Service Type</option>
            <option>Hospitality Manpower</option>
          </select>
        </div>
        <div className="col-span-12 row-span-2">
          <textarea
            className="h-full w-full rounded-md border border-[#E4D4B4] bg-[#FBF7E2] p-3 font-normal text-[#626262] outline-none md:rounded-lg md:p-4 md:font-bold"
            placeholder="Project summary, location, size, timeline"
          />
        </div>

        <div className="flex col-span-12 row-span-1 justify-center items-center">
          <button className="font-plus-jakarta rounded-full bg-[#B79B63] px-6 py-3 font-extrabold text-white hover:opacity-90">
            Send Inquiry
          </button>
        </div>
      </div>
    </form>
  )
}
