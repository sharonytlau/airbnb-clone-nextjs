export enum SearchTypes {
  'WHERE',
  'WHEN',
  'WHO',
}

type SearchCardProps = {
  searchType: keyof typeof SearchTypes
  activeType: keyof typeof SearchTypes
  children?: React.ReactNode
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
  activeType,
  children,
  handleClick,
  input,
  activeStyle = '',
}: SearchCardProps) {
  const open = searchType === activeType
  const hide = searchType === 'WHO' && activeType === 'WHEN'

  const texts = {
    ...cardTexts[searchType],
    title:
      searchType.charAt(0).toUpperCase() + searchType.slice(1).toLowerCase(),
  }

  return open ? (
    <div
      id={`search-card-${searchType}`}
      className={`flex flex-col gap-4 bg-white rounded-3xl py-6 shadow-[0_5px_15px] shadow-zinc-350 overflow-hidden ${activeStyle}`}
    >
      <h2 className="text-xl tracking-tight font-semibold px-6">
        {texts.heading}
      </h2>
      {children}
    </div>
  ) : !hide ? (
    <div
      id={`SEARCH_CARD_${searchType}`}
      className="flex justify-between bg-white p-4 rounded-2xl shadow-[0_2px_6px] shadow-zinc-200 tracking-tight"
      onClick={handleClick}
    >
      <h2 className="text-zinc-600"> {texts.title} </h2>
      <span> {input || texts.placeholder} </span>
    </div>
  ) : (
    <></>
  )
}
