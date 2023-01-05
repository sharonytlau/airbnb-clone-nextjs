import SkeletonElement from 'components/SkeletonElement'

export default function Trips() {
  return (
    <>
      <SkeletonElement variant="circle"></SkeletonElement>
      <SkeletonElement variant="text"></SkeletonElement>
      <SkeletonElement variant="paragraph" lines={2}></SkeletonElement>
      <SkeletonElement variant="square"></SkeletonElement>
    </>
  )
}
