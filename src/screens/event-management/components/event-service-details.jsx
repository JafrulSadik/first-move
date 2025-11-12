import EventServiceDetailsImg from '../../../assets/images/event-management/event-management.png'

export default function EventServiceDetails() {
  return (
    <div className="overflow-hidden relative mb-10 lg:my-15">
      <div className="relative z-20 mx-auto flex max-w-[1440px] flex-col-reverse gap-10 lg:flex-row lg:gap-16">
        <div className="absolute inset-y-1/2 left-0 z-10 hidden h-1/2 w-8 -translate-y-1/2 rounded-r-xl bg-[#B79B63] lg:block" />
        <div className="flex flex-col flex-1 gap-4 justify-center items-end">
          <div className="mx-auto w-[90%] lg:mx-0 lg:w-[80%]">
            <h1 className="mb-4 text-center text-2xl font-bold text-[#474747] lg:text-left lg:text-4xl">
              Our Event
              <br /> Management Services
            </h1>
            <p className="text-center text-[#474344] lg:text-justify">
              From setup to teardown, our experienced teams handle logistics, guest services, and on-site coordination.
              We adapt to events of any scale, ensuring safety, efficiency, and brand alignment. Our staff are trained
              to manage crowd flow, technical troubleshooting, and last-minute changes with professionalism and calm. We
              work closely with organizers to deliver seamless experiences, leaving a lasting impression on your guests
              and stakeholders.
            </p>
          </div>
        </div>

        <div className="relative flex-1 py-15">
          <div className="absolute inset-y-1/2 right-0 z-10 h-full w-3/4 -translate-y-1/2 rounded-l-xl bg-[#B79B63]" />
          <div className="relative z-30 mx-auto flex w-[90%] lg:mx-0">
            <img src={EventServiceDetailsImg} alt="" className="object-cover rounded-2xl aspect-5/4" />
          </div>
        </div>
      </div>
    </div>
  )
}
