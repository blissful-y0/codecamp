import {useRouter} from 'next/router';
import {useQuery, gql} from '@apollo/client';
import ViewUI from './View.presenter';
import {
  IQuery,
  IQueryFetchProfileArgs,
} from '../../commons/types/generated/types';

interface IQueryProfile {
  data: {
    fetchProfile: {
      number: number;
      name: string;
      age: number;
      school: string;
    };
  };
}

export default function QueryDetailPage() {
  const router = useRouter();
  const QUERY_PROFILE = gql`
    query fetchProfile($name: String) {
      fetchProfile(name: $name) {
        number
        name
        age
        school
      }
    }
  `;

  const {data} = useQuery<IQuery, IQueryFetchProfileArgs>(QUERY_PROFILE, {
    variables: {
      name: String(router.query.name),
    },
  });

  return (
    <>
      <ViewUI data={data} />
    </>
  );
}
