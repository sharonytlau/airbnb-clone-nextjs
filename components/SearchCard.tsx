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
  handleClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const cardTexts = {
  WHERE: { placeholder: "I'm flexible", heading: 'Where to?' },
  WHEN: { placeholder: 'Add dates', heading: "When's your trip?" },
  WHO: { placeholder: 'Add guests', heading: "Who's coming" },
}

export function SearchCard({
  searchType,
  children,
  open = false,
  handleClick,
}: SearchCardProps) {
  console.log('get type!!', searchType)

  const texts = {
    ...cardTexts[searchType],
    title:
      searchType.charAt(0).toUpperCase() + searchType.slice(1).toLowerCase(),
  }

  return open ? (
    <div className="flex flex-col gap-4 bg-white rounded-3xl p-6 shadow-[0_5px_15px] shadow-zinc-350">
      <h2 className="text-xl tracking-tight font-semibold">{texts.heading}</h2>
      {children}
    </div>
  ) : (
    <div
      className="flex justify-between bg-white p-4 rounded-2xl shadow-[0_2px_6px] shadow-zinc-200"
      onClick={handleClick}
    >
      <h2 className="text-zinc-600"> {texts.title} </h2>
      <span> {texts.placeholder} </span>
    </div>
  )
}
