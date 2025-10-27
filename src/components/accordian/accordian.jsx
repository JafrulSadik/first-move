import { useState } from 'react'

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const items = [
    {
      question: 'How doi get started with Supply?',
      answer:
        'Yes, we arrange online meeting for all clients, allowing easy access to our team and services from any location.',
    },
    {
      question: 'Can I meet with your team online?',
      answer:
        'Yes, we arrange online meeting for all clients, allowing easy access to our team and services from any location.',
    },
    {
      question: 'What industries do you work with?',
      answer:
        'Yes, we arrange online meeting for all clients, allowing easy access to our team and services from any location.',
    },
    {
      question: 'Do you help small business or startups?',
      answer:
        'Yes, we arrange online meeting for all clients, allowing easy access to our team and services from any location.',
    },
    {
      question: 'What industries do you work with?',
      answer:
        'Yes, we arrange online meeting for all clients, allowing easy access to our team and services from any location.',
    },
  ]

  return (
    <div className="gap-15">
      {items.map((item, index) => (
        <div key={index} className="mb-5 border-b border-[#EED39F]">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex w-full items-center justify-between pb-5 text-left text-base font-bold text-white md:text-xl"
          >
            {item.question}
            <span className="text-base md:text-xl">{openIndex === index ? '−' : '+'}</span>
          </button>

          <div
            className={`overflow-hidden text-sm text-[#F4F4F4] transition-all duration-300 md:text-base ${
              openIndex === index ? 'max-h-40 pb-2' : 'max-h-0 p-0'
            }`}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Accordion
