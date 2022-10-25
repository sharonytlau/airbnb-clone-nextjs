export enum SearchTypes {
  'WHERE',
  'WHEN',
  'WHO',
}

type SearchCardProps = {
  searchType: keyof typeof SearchTypes
  children?: React.ReactNode
  open?: boolean
  input?: string
  activeStyle?: string
  handleClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const cardTexts = {
  WHERE: { placeholder: "I'm flexible", heading: 'Where to?' },
  WHEN: { placeholder: 'Add dates', heading: "When's your trip?" },
  WHO: { placeholder: 'Add guests', heading: "Who's coming?" },
}

export function SearchCard({
  searchType,
  children,
  open = false,
  handleClick,
  input,
  activeStyle = '',
}: SearchCardProps) {
  console.log('rendered', { searchType, children, open, handleClick, input })

  const texts = {
    ...cardTexts[searchType],
    title:
      searchType.charAt(0).toUpperCase() + searchType.slice(1).toLowerCase(),
  }

  const isWhen = searchType === 'WHEN'

  return open ? (
    <div className={`wrapper relative ${isWhen ? 'flex-grow' : ''} `}>
      <div
        className={`flex flex-col gap-4 bg-white rounded-3xl py-6 shadow-[0_5px_15px] shadow-zinc-350 overflow-hidden ${activeStyle}`}
      >
        <h2 className="text-xl tracking-tight font-semibold px-6">
          {texts.heading}
        </h2>
        {children}
      </div>
    </div>
  ) : (
    <div
      className="flex justify-between bg-white p-4 rounded-2xl shadow-[0_2px_6px] shadow-zinc-200"
      onClick={handleClick}
    >
      <h2 className="text-zinc-600"> {texts.title} </h2>
      <span> {input || texts.placeholder} </span>
    </div>
  )
}
