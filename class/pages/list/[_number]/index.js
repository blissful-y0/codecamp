import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { FETCH_BOARD } from '../../../src/components/board/list/BoardView.quries'

export default function RenderViewPage () {
  const router = useRouter()

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query._number) }
  })

  console.log(data)
  console.log(data.title)

  return (
    <>
      <div>asdfasdf</div>
    </>
  )
}
