import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { FETCH_BOARD } from '../list/BoardView.quries'

export default function RenderViewPage () {
  const router = useRouter()

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query._number) }
  })

  console.log(data)

  return (
    <>
      <div>asdfasdf</div>
    </>
  )
}
