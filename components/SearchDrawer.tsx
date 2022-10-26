import { useEffect, useRef, useState } from 'react'
import {
  add,
  daysInWeek,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getMonth,
  getYear,
  startOfMonth,
  startOfToday,
  startOfWeek,
} from 'date-fns'

import { WorldMap } from 'components/maps/WorldMap'
import { EuropeMap } from 'components/maps/EuropeMap'
import { SouthAmericaMap } from 'components/maps/SouthAmericaMap'
import { SearchFineIcon } from 'components/icons/SearchFineIcon'
import { CancelIcon } from 'components/icons/CancelIcon'
import { HistoryIcon } from 'components/icons/HistoryIcon'
import { BackIcon } from 'components/icons/BackIcon'
import { AddIcon } from 'components/icons/AddIcon'
import { MinusIcon } from 'components/icons/MinusIcon'
import { PlusMinusIcon } from 'components/icons/PlusMinusIcon'
import { SearchTypes, SearchCard } from 'components/SearchCard'
import { getEnumKeys, compareDates } from 'utils/utils'
import { splitArray } from 'utils/utils'

const fakeAreas = [
  {
    image: <WorldMap />,
    title: "I'm flexible",
  },
  {
    image: <EuropeMap />,
    title: 'Europe',
  },
  {
    image: <SouthAmericaMap />,
    title: 'South America',
  },
]

const tabs = [{ title: 'Stays' }, { title: 'Experiences' }]
const whenTabs = [{ title: 'Choose dates' }, { title: "I'm flexible" }]

const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

enum DatePillTypes {
  'Exact dates' = 0,
  '1 day' = 1,
  '2 days' = 2,
  '3 days' = 3,
  '7days' = 7,
}

type SearchDrawerProps = {
  // showDrawer: Boolean
  handleHideDrawer: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void
}

function SearchDrawer({ handleHideDrawer }: SearchDrawerProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].title)
  const [activeArea, setActiveArea] = useState(fakeAreas[0].title)
  const [showDestinationInputModal, setShowDestinationInputModal] =
    useState(false)
  const [activeCard, setActiveCard] =
    useState<keyof typeof SearchTypes>('WHERE')
  const [guestNum, setGuestNum] = useState({
    Adults: 0,
    Children: 0,
    Infant: 0,
    Pets: 0,
  })

  type dateSelectionRange = {
    start: Date | undefined
    end: Date | undefined
  }

  // When
  const [activeWhenTab, setActiveWhenTab] = useState(whenTabs[0].title)
  const [activeDatePill, setActiveDatePill] = useState(0)
  const [dateSelectionRange, setDateSelectionRange] =
    useState<dateSelectionRange>({
      start: undefined,
      end: undefined,
    })
  const [activeDate, setActiveDate] = useState<Date | undefined>(undefined)

  const today = startOfToday()
  const startOfCurrentMonth = startOfMonth(today)
  const [displayMonthFirstDays, setDisplayMonthFirstDays] = useState<Date[]>([
    startOfCurrentMonth,
    add(startOfCurrentMonth, { months: 1 }),
    add(startOfCurrentMonth, { months: 2 }),
    add(startOfCurrentMonth, { months: 3 }),
    add(startOfCurrentMonth, { months: 4 }),
    add(startOfCurrentMonth, { months: 5 }),
    add(startOfCurrentMonth, { months: 6 }),
    add(startOfCurrentMonth, { months: 7 }),
    add(startOfCurrentMonth, { months: 8 }),
  ])

  // calendar
  function getMonthCalendar(startOfTheMonth: Date) {
    const startOfTheFirstWeek = startOfWeek(startOfTheMonth)
    const endOfTheMonth = endOfMonth(startOfTheMonth)
    const endOfTheLastWeek = endOfWeek(endOfTheMonth)
    const monthText = format(startOfTheMonth, 'MMMM yyyy')
    const daysOfMonth = eachDayOfInterval({
      start: startOfTheFirstWeek,
      end: endOfTheLastWeek,
    })

    return { monthText, daysOfMonth }
  }

  const getDateStyle = (day: Date, m: Date) => {
    const isHidden = day < startOfMonth(m) || day > endOfMonth(m)
    if (isHidden) return { cellStyle: '', circleStyle: 'hidden' }

    const isPast = day < today
    if (isPast)
      return {
        cellStyle: '',
        circleStyle: 'text-zinc-300',
      }

    const { start, end } = dateSelectionRange
    const isStart = start && compareDates(day, start)
    const isEnd = end && compareDates(day, end)
    const isInRange =
      start && end && ((day >= start && day <= end) || isStart || isEnd)

    // cell style
    let cellStyle = isStart
      ? 'rounded-tl-full rounded-bl-full'
      : isEnd
      ? 'rounded-tr-full rounded-br-full'
      : ''

    if (isInRange) cellStyle += ' bg-zinc-75'

    // circle style
    let circleStyle = 'text-zinc-900'

    if (isStart || isEnd) {
      circleStyle =
        circleStyle.replace('text-zinc-900', 'text-white') +
        ' w-full h-full rounded-full bg-gray-800'
    }

    if (activeDate && compareDates(day, activeDate)) {
      circleStyle += ' outline outline-gray-500'
    }

    return { cellStyle, circleStyle }
  }

  enum guestTypes {
    'Adults',
    'Children',
    'Infant',
    'Pets',
  }

  type GuestChoice = {
    title: keyof typeof guestTypes
    description: string
  }

  const guestChoices: GuestChoice[] = [
    { title: 'Adults', description: 'Ages 13 or above' },
    { title: 'Children', description: 'Ages 2-12' },
    { title: 'Infant', description: 'Under 2' },
    { title: 'Pets', description: 'Bringing a service animal' },
  ]

  const getTabStyle = (title: string) => {
    const active = 'border-b-2 border-current'
    const inactive = 'text-gray-500'

    return title === activeTab ? active : inactive
  }

  const getAreaStyle = (title: string) => {
    const active = ''
    const inactive = 'text-zinc-500'

    return title === activeArea ? active : inactive
  }

  const getAreaImageStyle = (title: string) => {
    const active = 'outline-offset-[-2px] outline outline-2 outline-zinc-600'
    const inactive = 'outline-offset-[-1px] outline outline-1 outline-zinc-300'

    return title === activeArea ? active : inactive
  }

  const getGuestIconStyle = (
    type: 'add' | 'minus',
    title: keyof typeof guestTypes
  ) => {
    const disableCond =
      type === 'add' ? checkGuestMax(title) : checkGuestMin(title)
    const disable = 'border-zinc-150 text-zinc-150'
    const enable = 'border-gray-400 text-gray-500'

    return disableCond ? disable : enable
  }

  const getWhenTabStyle = (title: string) => {
    const active = 'bg-white shadow-[0_2px_5px] shadow-gray-300'
    const inactive = '·'

    return activeWhenTab === title ? active : inactive
  }

  const getDatePillStyle = (index: number) => {
    const active =
      'bg-gray-100 outline-offset-[-2px] outline-2 outline-gray-800'
    const inactive = 'outline-offset-[-1px] outline-1 outline-gray-300'

    return activeDatePill === index ? active : inactive
  }

  function checkGuestMin(title: keyof typeof guestTypes) {
    return guestNum[title] === 0
  }

  function checkGuestMax(title: keyof typeof guestTypes) {
    switch (title) {
      case 'Adults':
      case 'Children':
        return guestNum['Adults'] + guestNum['Children'] === 16
      case 'Infant':
        return guestNum['Infant'] === 5
      case 'Pets':
        return guestNum['Pets'] === 5
    }
  }

  function getCardInput(type: keyof typeof SearchTypes) {
    switch (type) {
      case 'WHERE':
        return activeArea
      case 'WHEN':
        const { start, end } = dateSelectionRange

        let dateRangeStr

        if (start && end) {
          if (
            getMonth(start) === getMonth(end) &&
            getYear(start) === getYear(end)
          ) {
            dateRangeStr = `${format(start, 'MMM d')} - ${format(end, 'd')}`
          } else {
            dateRangeStr = `${format(start, 'MMM d')} - ${format(end, 'MMM d')}`
          }
        } else {
          return ''
        }

        return `${dateRangeStr} (${activeDatePill !== 0 ? '±' : ''}${
          DatePillTypes[activeDatePill]
        })`
      case 'WHO':
        return ''
    }
  }

  function handleClickCalendar(day: Date) {
    setActiveDate(day)
    const { start, end } = dateSelectionRange

    console.log('clicked!!!')

    if (end && start) {
      if (day < end && day > start) {
        setDateSelectionRange((before) => {
          return { ...before, start: day }
        })
      } else {
        setDateSelectionRange({ start: day, end: undefined })
      }
      return
    }

    if (start) {
      if (day > start) {
        setDateSelectionRange((before) => {
          return { ...before, end: day }
        })
      } else {
        setDateSelectionRange((before) => {
          return { ...before, start: day }
        })
      }
    } else {
      setDateSelectionRange((before) => {
        return { ...before, start: day }
      })
    }
  }

  function handleClearCalendar() {
    if (activeDate) {
      setActiveDate(undefined)
      setDateSelectionRange({ start: undefined, end: undefined })
    } else {
      setActiveCard('WHO')
    }
  }

  function handleClearNext() {
    setActiveCard('WHO')
  }

  return (
    <div className="flex flex-col bg-zinc-100 h-full z-25 text-sm font-medium text-gray-900">
      {/* tabs */}
      <div className="relative flex justify-center gap-4 text-base py-6">
        <RoundedButton
          actionType={showDestinationInputModal ? 'BACK' : 'CANCEL'}
          handleClick={
            showDestinationInputModal
              ? () => {
                  setShowDestinationInputModal(false)
                }
              : handleHideDrawer
          }
        />
        {tabs.map(({ title }) => {
          return (
            <div
              className={getTabStyle(title)}
              onClick={() => {
                setActiveTab(title)
              }}
            >
              {title}
            </div>
          )
        })}
      </div>

      {/* initial search */}
      {!showDestinationInputModal && (
        <div className="flex-grow flex flex-col gap-3 px-3 overflow-y-hidden">
          {/* cards: Where, When, Who */}
          {getEnumKeys(SearchTypes).map((type) => {
            return (
              <SearchCard
                searchType={type}
                activeType={activeCard}
                handleClick={() => setActiveCard(type)}
                input={getCardInput(type)}
                activeStyle={
                  activeCard === 'WHEN'
                    ? `absolute z-30 top-[calc(8.5rem+2px)] bottom-[0.5rem] right-[0.75rem] left-[0.75rem] pb-0`
                    : ''
                }
              >
                {/* Where */}
                {activeCard === 'WHERE' && (
                  <div className="px-6 flex flex-col gap-4">
                    <SearchDestinationInput
                      handleClick={() => {
                        setShowDestinationInputModal(true)
                      }}
                    />
                    {/* area cards */}
                    <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
                      {fakeAreas.map(({ image, title }) => {
                        return (
                          <div
                            className={`flex flex-col gap-2 ${getAreaStyle(
                              title
                            )}`}
                            onClick={() => {
                              setActiveArea(title)
                              setActiveCard('WHEN')
                            }}
                          >
                            <div
                              className={`w-30 h-30 flex items-center rounded-2xl justify-center overflow-hidden ${getAreaImageStyle(
                                title
                              )}`}
                            >
                              {image}
                            </div>
                            <div> {title}</div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
                {/* When */}
                {activeCard === 'WHEN' && (
                  <div className="flex flex-col flex-grow overflow-y-hidden">
                    {/* tabs */}
                    <div className="mx-auto flex justify-between items-center p-1.5 bg-zinc-150 rounded-full w-80 mb-4">
                      {whenTabs.map(({ title }) => {
                        return (
                          <div
                            className={`px-5 py-2 rounded-full  flex-1 text-center ${getWhenTabStyle(
                              title
                            )}`}
                            onClick={() => setActiveWhenTab(title)}
                          >
                            {title}
                          </div>
                        )
                      })}
                    </div>

                    {activeWhenTab === 'Choose dates' && (
                      <>
                        {/* Choose dates: Calendar Header*/}
                        <div className="w-full border-b border-zinc-300">
                          <table className="text-center text-zinc-500 text-xs table-fixed mx-auto">
                            <tbody>
                              <tr>
                                {weekDays.map((el) => (
                                  <td className="w-10 h-10 p-px">{el}</td>
                                ))}
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        {/* Calendar Body */}
                        <div className="h-full flex-1 flex-col overflow-y-scroll scrollbar-hide">
                          {displayMonthFirstDays.map((m) => {
                            const { monthText, daysOfMonth } =
                              getMonthCalendar(m)
                            return (
                              <>
                                <h3 className="text-base font-medium mt-4 mb-2 pl-5">
                                  {monthText}
                                </h3>
                                <table className="text-center text-zinc-500 text-xs table-fixed mx-auto">
                                  <tbody>
                                    {splitArray(daysOfMonth, 7).map(
                                      (weekArr) => {
                                        return (
                                          <tr>
                                            {weekArr.map((day) => {
                                              const { cellStyle, circleStyle } =
                                                getDateStyle(day, m)
                                              return (
                                                <td
                                                  className={` w-10 h-10 p-px text-sm ${cellStyle}`}
                                                >
                                                  <button
                                                    className={`${circleStyle}`}
                                                    disabled={day < today}
                                                    onClick={() =>
                                                      handleClickCalendar(day)
                                                    }
                                                  >
                                                    <time
                                                      dateTime={format(
                                                        day,
                                                        'yyyy-MM-dd'
                                                      )}
                                                    >
                                                      {format(day, 'd')}
                                                    </time>
                                                  </button>
                                                </td>
                                              )
                                            })}
                                          </tr>
                                        )
                                      }
                                    )}
                                  </tbody>
                                </table>
                              </>
                            )
                          })}
                        </div>
                        {/* Calendar Pills */}
                        <div className="flex gap-2 px-4 py-1.5 overflow-x-scroll scrollbar-hide border-t border-b border-gray-300">
                          {getEnumKeys(DatePillTypes).map((val) => {
                            const index = DatePillTypes[val]
                            return (
                              <button
                                className={`flex items-center gap-2 py-2 px-4 outline whitespace-nowrap rounded-full text-xs font-normal ${getDatePillStyle(
                                  index
                                )}`}
                                onClick={() => setActiveDatePill(index)}
                              >
                                {index !== 0 && <PlusMinusIcon />}
                                <span>{val}</span>
                              </button>
                            )
                          })}
                        </div>
                        {/* Calendar Footer */}
                        <div className="w-full flex justify-between py-4 px-5 text-base z-10">
                          <button onClick={handleClearCalendar}>
                            <span className="underline">
                              {activeDate ? 'Clear' : 'Skip'}
                            </span>
                          </button>
                          <button
                            className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg"
                            onClick={handleClearNext}
                          >
                            <span>Next</span>
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* Who */}
                {activeCard === 'WHO' &&
                  guestChoices.map(({ title, description }) => {
                    return (
                      <div className="flex justify-between items-center pb-3 mx-6 border-b border-b-zinc-150 last:border-b-0 last:pb-0 ">
                        <div>
                          <p> {title} </p>
                          <p className="text-gray-500 font-normal">
                            {description}
                          </p>
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            className={`flex items-center justify-center text-md rounded-full p-0.5 border ${getGuestIconStyle(
                              'minus',
                              title
                            )}`}
                            disabled={checkGuestMin(title)}
                            onClick={() =>
                              setGuestNum((before) => {
                                return {
                                  ...before,
                                  [title]: before[title] - 1,
                                }
                              })
                            }
                          >
                            <MinusIcon />
                          </button>
                          <span className="text-gray-800 text-center w-8 font-normal">
                            {guestNum[title]}
                          </span>
                          <button
                            className={`flex items-center justify-center text-md rounded-full p-0.5 border ${getGuestIconStyle(
                              'add',
                              title
                            )}`}
                            disabled={checkGuestMax(title)}
                            onClick={() =>
                              setGuestNum((before) => {
                                return {
                                  ...before,
                                  [title]: before[title] + 1,
                                }
                              })
                            }
                          >
                            <AddIcon />
                          </button>
                        </div>
                      </div>
                    )
                  })}
              </SearchCard>
            )
          })}

          {/* footer */}
          <div className="fixed left-0 bottom-0 w-full flex justify-between py-3 px-5 bg-zinc-75 text-base z-10">
            <button>
              <span className="underline">Clear all</span>
            </button>
            <button className="flex items-center gap-2 px-6 py-2 bg-prime-400 text-white rounded-lg">
              <div className="text-lg">
                <SearchFineIcon />
              </div>
              <span>Search</span>
            </button>
          </div>
        </div>
      )}

      {/* modal: destination input */}
      {showDestinationInputModal && (
        <div className="flex-grow flex flex-col gap-6 bg-white p-6 rounded-4xl shadow-[0_5px_15px] shadow-zinc-350">
          <SearchDestinationInput
            enableInput
            handleClick={() => {
              console.log('1111')
            }}
          />
          <div>
            <h3 className="font-semibold"> Recent Searches</h3>
            <div className="flex items-center gap-4 py-4">
              <div className="flex items-center justify-center w-12 h-12 bg-zinc-150 rounded-xl">
                <HistoryIcon className="text-2xl" />
              </div>
              <div className="font-normal">
                <p className="text-base">London · Stays</p>
                <p className="text-zinc-400 text-xs ">Jan 25-27 · 1 guest</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

type SearchDestinationInputProps = {
  handleClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  enableInput?: boolean
}

function SearchDestinationInput({
  handleClick,
  enableInput = false,
}: SearchDestinationInputProps) {
  const [hasFocused, setHasFocused] = useState(false)

  return (
    <div
      className={`flex items-center gap-2 py-4 text-zinc-500  rounded-xl p-4 ${
        hasFocused ? 'bg-zinc-100' : 'border border-zinc-400'
      }`}
      onClick={handleClick}
    >
      <div className="text-zinc-900 text-md stroke-1 stroke-current">
        <SearchFineIcon />
      </div>
      <input
        placeholder="Search destinations"
        disabled={!enableInput}
        className="bg-transparent outline-none"
      />
    </div>
  )
}

enum RoundedBtnTypes {
  CANCEL,
  BACK,
}

type RoundedButtonProps = {
  actionType?: keyof typeof RoundedBtnTypes
  handleClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

function RoundedButton({
  actionType = 'BACK',
  handleClick,
}: RoundedButtonProps) {
  return (
    <div
      className="w-8 h-8 absolute top-50% -translate-y-[0.1rem] left-5 flex items-center justify-center bg-zinc-25 border border-gray-400 rounded-full"
      onClick={handleClick}
    >
      {actionType === 'CANCEL' ? (
        <CancelIcon />
      ) : (
        <BackIcon className="text-xs" />
      )}
    </div>
  )
}

export default SearchDrawer
