import TeamOneImg from '../../../assets/images/about/teams/team-1.jpg'
import TeamTwoImg from '../../../assets/images/about/teams/team-2.jpg'
import TeamThreeImg from '../../../assets/images/about/teams/team-3.jpg'
import TeamFourImg from '../../../assets/images/about/teams/team-4.jpg'
import TeamFiveImg from '../../../assets/images/about/teams/team-5.jpg'
import TeamSixImg from '../../../assets/images/about/teams/team-6.jpg'

const teams = [
  {
    name: 'Mark Zakson',
    position: 'Co-Founder & CEO',
    image: TeamOneImg,
  },
  {
    name: 'John Doe',
    position: 'Senior Engineer',
    image: TeamTwoImg,
  },
  {
    name: 'Mark Zakson',
    position: 'Project Manager',
    image: TeamThreeImg,
  },
  {
    name: 'John Doe',
    position: 'Senior Engineer',
    image: TeamFourImg,
  },
  {
    name: 'Mark Zakson',
    position: 'Project Manager',
    image: TeamFiveImg,
  },
  {
    name: 'Mark Zakson',
    position: 'Project Manager',
    image: TeamSixImg,
  },
]

export default function TeamDetails() {
  return (
    <div className="flex justify-center bg-white md:py-10">
      <div className="w-[90%] max-w-6xl lg:space-y-10">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-stretch lg:gap-0">
          <div className="lg:border-r lg:border-[#E2E2E2] lg:pr-10">
            <div className="flex w-fit items-center gap-2 rounded-full border border-[#B79B63] px-2 py-1 font-bold uppercase md:px-4 md:py-1">
              <div className="size-2 rounded-full bg-[#B79B63]"></div>
              <p className="text-nowrap text-xs text-[#231F20] md:text-sm">Meet Our Team</p>
            </div>
          </div>
          <div className="text-center text-3xl font-bold leading-[130%] md:text-4xl lg:ml-10 lg:text-left">
            Meet the <span className="text-primary">Experts Powering </span> First Move Facilities Management Services.
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 pt-8">
          {teams.map((team, index) => (
            <div key={index} className="aspect-3/4 col-span-12 flex justify-center md:col-span-6 lg:col-span-4">
              <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-lg">
                <img src={team.image} alt="Mark Zakson" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-6 left-0 right-0 text-center text-white">
                  <h3 className="text-xl font-semibold">{team.name}</h3>
                  <p className="text-sm opacity-90">{team.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
