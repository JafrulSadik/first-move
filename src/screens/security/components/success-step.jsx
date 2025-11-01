import { AskIcon, IdeaIcon, NetworkIcon, SuccessStepIcon } from '../../../assets/icons'

const successStep = [
  {
    title: 'We Ask & Listen',
    icon: AskIcon,
    description:
      'What workforce challenges give you heartburn? What are your KPIs? What’s your culture like? What are your upcoming staffing needs? Our years of experience means we know the right questions to ask. And the more we know, the faster you achieve your goals.',
  },
  {
    title: 'We Solve',
    icon: IdeaIcon,
    description:
      'Now, the fun part. Using what we learned, we recommend the best course of action to help you achieve your goals. Through our deep knowledge of your industry and business, paired with intelligent data and processes, we will optimize the total cost of your workforce.',
  },
  {
    title: 'We Get To Work',
    icon: NetworkIcon,
    description:
      'Next, we deliver results. The key to delivering results is attracting better talent, hiring the right people, and making sure the best people stay. The key to our success is having the best recruiters, constantly upskilling our workforce, and using our data to make better hiring decisions for you.',
  },
  {
    title: 'We Get Better',
    icon: SuccessStepIcon,
    description:
      'We are always learning, looking for ways to get better. We perform an ongoing Workforce Review with you, leveraging our market insight, our thought leadership, and our performance to fine tune our approach. And over time, we build strong partnerships with you and your team, ensuring that we can meet whatever opportunity or challenge stands before you.',
  },
]

export default function SuccessStep() {
  return (
    <div className="my-8 flex justify-center md:my-20">
      <div className="w-[90%] lg:max-w-6xl">
        <div className="mb-15 mt-5 flex items-center md:gap-8">
          <h1 className="text-3xl font-bold leading-[140%] text-[#B79B63] lg:text-4xl">Our Steps to Success</h1>
          <div className="h-1 w-12 bg-[#B79B63]"></div>
        </div>

        <div className="grid grid-cols-12 gap-y-6 lg:w-full lg:gap-x-14">
          {successStep.map((item, index) => (
            <div key={index} className="col-span-12 lg:col-span-6">
              <div className="flex items-start gap-8">
                <div className="lg:min-w-15 min-w-12">
                  <img src={item.icon} alt="" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold md:text-2xl">{item.title}</h3>
                  <p className="text-sm leading-[150%] text-[#626262] md:text-base">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
