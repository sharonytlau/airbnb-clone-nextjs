import React, { useState } from 'react'
import { WorldMap } from 'components/maps/WorldMap'
import { EuropeMap } from 'components/maps/EuropeMap'
import { SouthAmericaMap } from 'components/maps/SouthAmericaMap'
import { SearchFineIcon } from 'components/icons/SearchFineIcon'
import { CancelIcon } from 'components/icons/CancelIcon'
import { HistoryIcon } from 'components/icons/HistoryIcon'
import { BackIcon } from 'components/icons/BackIcon'
import { AddIcon } from 'components/icons/AddIcon'
import { MinusIcon } from 'components/icons/MinusIcon'
import { SearchTypes, SearchCard } from 'components/SearchCard'
import { getEnumKeys } from 'utils/utils'
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getMonth,
  startOfMonth,
  startOfToday,
  startOfWeek,
} from 'date-fns'
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

const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

type SearchDrawerProps = {
  showDrawer: Boolean
  handleHideDrawer: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void
}

function SearchDrawer({ showDrawer, handleHideDrawer }: SearchDrawerProps) {
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
  let today = startOfToday()
  let startOfCurrentMonth = startOfMonth(today)
  const currentMonth = getMonth(today)
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
    let startOfTheFirstWeek = startOfWeek(startOfTheMonth)
    const endOfTheMonth = endOfMonth(startOfTheMonth)
    const endOfTheLastWeek = endOfWeek(endOfTheMonth)
    const monthText = format(startOfTheMonth, 'MMMM yyyy')
    const daysOfTheWeek = eachDayOfInterval({
      start: startOfTheFirstWeek,
      end: endOfTheLastWeek,
    })

    type DayObj = {
      day: Date
      style: string
    }

    const daysObj: DayObj[] = daysOfTheWeek.map((date) => {
      return {
        day: date,
        style:
          date < startOfTheMonth || date > endOfTheMonth
            ? 'hidden'
            : date < today
            ? 'text-zinc-300'
            : 'text-zinc-900',
      }
    })

    return { monthText, daysObj }
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

  const getDrawerStyle = (showDrawer: Boolean) => {
    const show = 'opacity-100'
    const hide = 'opacity-50 translate-y-full'
    return showDrawer ? show : hide
  }

  const getTabStyle = (title: string) => {
    const active = 'border-b-2 border-current'
    const inactive = 'text-gray-500'

    return title === activeTab ? active : inactive
  }

  const getAreaStyle = (title: string) => {
    const active = ''
    const inactive = 'text-gray-500'

    return title === activeArea ? active : inactive
  }

  const getAreaImageStyle = (title: string) => {
    const active = 'outline-offset-[-2px] outline outline-2 outline-gray-800'
    const inactive = 'outline-offset-[-1px] outline outline-1 outline-gray-300'

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
        return ''
      case 'WHO':
        return ''
    }
  }

  return (
    <div
      className={`fixed left-0 top-0 flex flex-col bg-zinc-100 w-screen h-screen z-25 text-sm font-medium text-gray-900 transition-all duration-500 ease-out ${getDrawerStyle(
        showDrawer
      )}`}
    >
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
                open={type === activeCard}
                handleClick={() => setActiveCard(type)}
                input={getCardInput(type)}
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
                  <div className="flex flex-col flex-grow">
                    {/* tabs */}
                    <div className="mx-auto flex justify-between items-center p-1.5 bg-zinc-150 rounded-full w-80 mb-4">
                      <div className="bg-white px-5 py-2 rounded-full shadow-[0_2px_5px] shadow-gray-300 flex-1 text-center">
                        Choose dates
                      </div>
                      <div className="flex-1 text-center">I'm flexible</div>
                    </div>

                    {/* Choose dates: Calendar Header*/}
                    <div className="w-full border-b border-zinc-300">
                      <table className="p- w-80 text-center text-zinc-500 text-xs table-fixed mx-auto">
                        <tbody>
                          <tr>
                            {weekDays.map((el) => (
                              <td className="p-1">
                                {/*  bg-orange-200 border border-gray-300 */}
                                {el}
                              </td>
                            ))}
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Calendar Body */}
                    <div className="wrapper relative flex-grow">
                      <div className="absolute left-0 right-0 top-0 bottom-24 h-full flex flex-col overflow-y-scroll">
                        {displayMonthFirstDays.map((m) => {
                          const { monthText, daysObj } = getMonthCalendar(m)
                          return (
                            <>
                              <h3 className="text-base font-medium mt-4 mb-2 pl-5">
                                {monthText}
                              </h3>
                              <table className="p- w-80 text-center text-zinc-500 text-xs table-fixed mx-auto">
                                <tbody>
                                  {splitArray(daysObj, 7).map((weekArr) => {
                                    return (
                                      <tr>
                                        {weekArr.map(({ day, style }) => (
                                          <td className="p-1">
                                            {/*  bg-orange-200 border border-gray-300 */}
                                            <span className={style}>
                                              <time
                                                dateTime={format(
                                                  day,
                                                  'yyyy-MM-dd'
                                                )}
                                              >
                                                {format(day, 'd')}
                                              </time>
                                            </span>
                                          </td>
                                        ))}
                                      </tr>
                                    )
                                  })}
                                </tbody>
                              </table>
                            </>
                          )
                        })}
                      </div>
                    </div>
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
            <button className="flex items-center gap-2 px-4 py-2 bg-rose-500 text-white rounded-lg">
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
