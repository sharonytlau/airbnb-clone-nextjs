import React from 'react'

export default function ListingGrid({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-y-10 gap-x-6">
      {children}
    </div>
  )
}
