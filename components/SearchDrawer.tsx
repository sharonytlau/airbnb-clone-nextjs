import React from 'react'

type SearchDrawerProps = {
  showDrawer: Boolean
  handleHideDrawer: (event: React.MouseEvent<HTMLButtonElement>) => void
}

function SearchDrawer({ showDrawer, handleHideDrawer }: SearchDrawerProps) {
  const getDrawerStyle = (showDrawer: Boolean) => {
    const show = 'opacity-100'
    const hide = 'opacity-50 translate-y-full'
    return showDrawer ? show : hide
  }

  return (
    <div
      className={`fixed left-0 top-0 bg-white w-screen h-screen z-50 transition-all duration-500 ease-out ${getDrawerStyle(
        showDrawer
      )}`}
    >
      <button className="p-4 bg-red-500 text-white" onClick={handleHideDrawer}>
        cancel
      </button>
      SearchDrawer
    </div>
  )
}

export default SearchDrawer
