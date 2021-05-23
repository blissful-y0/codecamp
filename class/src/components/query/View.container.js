import { useRouter } from 'next/router'
import { useQuery, gql } from '@apollo/client'
import ViewUI from './View.presenter'

export default function QueryDetailPage () {
  const router = useRouter()
  const QUERY_PROFILE = gql`
    query fetchProfile($QUERY_PROFILE: String) {
      fetchProfile(name: $QUERY_PROFILE) {
        number
        name
        age
        school
      }
    }
  `

  const { data } = useQuery(QUERY_PROFILE, {
    variables: {
      QUERY_PROFILE: router.query.name
    }
  })

  return (
    <>
      <ViewUI data={data} />
    </>
  )
}
