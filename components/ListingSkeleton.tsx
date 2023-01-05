import SkeletonElement from './SkeletonElement'

export default function ListingSkeleton() {
  return (
    <div>
      <SkeletonElement variant="square" full />
      <div className="flex gap-[30%]">
        <div className="flex-[3_0_0]">
          <SkeletonElement variant="text" />
          <SkeletonElement variant="text" width={60} />
          <SkeletonElement variant="text" width={50} />
          <SkeletonElement variant="text" width={30} />
        </div>
        <div className="flex-[1_0_0]">
          <SkeletonElement variant="text" />
        </div>
      </div>
    </div>
  )
}
