import React, { useState } from 'react'
import { WorldMap } from 'components/maps/WorldMap'
import { EuropeMap } from 'components/maps/EuropeMap'
import { SouthAmericaMap } from 'components/maps/SouthAmericaMap'
import { SearchFineIcon } from './icons/SearchFineIcon'
import { CancelIcon } from './icons/CancelIcon'
import { HistoryIcon } from './icons/HistoryIcon'
import { BackIcon } from './icons/BackIcon'

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
  // const [upperLeftBtnType, setUpperLeftBtnType] =
  //   useState<keyof typeof RoundedBtnType>('CANCEL')

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
          handleCancel={
            showDestinationInputModal ? undefined : handleHideDrawer
          }
          handleBack={
            showDestinationInputModal
              ? function hideModal() {
                  console.log('hide modal!!!')

                  setShowDestinationInputModal(false)
                }
              : undefined
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
        <div className="flex flex-col gap-3 px-3">
          {/* card: Where */}
          <div className="flex flex-col gap-4 bg-white rounded-3xl p-5 shadow-[0_5px_15px] shadow-zinc-350">
            <h2 className="text-lg"> Where to? </h2>
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
                    className={`flex flex-col gap-2 ${getAreaStyle(title)}`}
                    onClick={() => setActiveArea(title)}
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
          {/* card: When */}
          <div className="flex justify-between bg-white p-4 rounded-2xl shadow-[0_2px_6px] shadow-zinc-200">
            <h2 className="text-zinc-600"> When </h2>
            <span> Add dates </span>
          </div>
          {/* card: Who */}
          <div className="flex justify-between bg-white p-4 rounded-2xl shadow-[0_2px_6px] shadow-zinc-200">
            <h2 className="text-zinc-600"> Who </h2>
            <span> Add guests </span>
          </div>
          {/* footer */}
          <div className="fixed left-0 bottom-0 w-full flex justify-between p-3 bg-zinc-75 text-base">
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
        <div className="flex-grow flex flex-col gap-6 bg-white p-5 rounded-4xl shadow-[0_5px_15px] shadow-zinc-350">
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
                <HistoryIcon className="text-xl" />
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

enum RoundedBtnType {
  CANCEL,
  BACK,
}

type RoundedButtonProps = {
  actionType?: keyof typeof RoundedBtnType
  handleCancel?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  handleBack?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

function RoundedButton({
  actionType = 'BACK',
  handleCancel,
  handleBack,
}: RoundedButtonProps) {
  return (
    <div
      className="w-8 h-8 absolute top-50% -translate-y-[0.1rem] left-5 flex items-center justify-center bg-zinc-25 border border-gray-400 rounded-full"
      onClick={
        handleCancel ? handleCancel : handleBack ? handleBack : undefined
      }
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
