import { useRouter } from 'next/router'
import { useQuery, gql } from '@apollo/client'
import QueryDetailPage from '../../../src/components/query/View.container'

export default function QueryView () {
  // const router = useRouter();
  // const QUERY_PROFILE = gql`
  //   query fetchProfile($QUERY_PROFILE: String) {
  //     fetchProfile(name: $QUERY_PROFILE) {
  //       number
  //       name
  //       age
  //       school
  //     }
  //   }
  // `;

  // const { data } = useQuery(QUERY_PROFILE, {
  //   variables: {
  //     QUERY_PROFILE: router.query.name,
  //   },
  // });

  // console.log(data.fetchProfile);

  // (async function () {
  //   const {number, name, age, school} = await client.query({
  //     query: gql``
  //   })
  // })

  // (async function () {
  //   const { loading, error, data } = await client.query({
  //     query: gql`
  //       query {
  //         continents {
  //           code
  //           name
  //         }
  //       }
  //     `,
  //   });

  // const [renderProfileQuery] = useQuery(QUERY_PROFILE);

  // (async function renderProfile() {
  //   try {
  //     const result = await renderProfileQuery({
  //       variables: {
  //         aaa: router.query.name,
  //       },
  //     });
  //     alert(result);
  //   } catch (error) {
  //     alert(error);
  //   }
  // });

  // console.log("data", data);
  // console.log(data);

  return (
    // <div>
    //   <div>이름: {data?.fetchProfile.name} </div>
    //   <div>나이: {data?.fetchProfile.age}</div>
    //   <div>학교: {data?.fetchProfile.school}</div>
    // </div>
    <QueryDetailPage />
  )
}
