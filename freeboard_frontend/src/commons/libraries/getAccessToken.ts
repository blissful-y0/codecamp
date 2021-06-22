import axios from 'axios';

export async function getAccessToken({setAccessToken}) {
  const response = await axios.post(
    'https://backend.codebootcamp.co.kr/graphql',
    {
      query: `mutation restoreAccessToken {
        restoreAccessToken {
          accessToken
        }
      }`,
    },
    {
      headers: {'Content-Type': 'application/json'},
      withCredentials: true,
    }
  );
  const newAccessToken = response.data.data.restoreAccessToken.accessToken;
  setAccessToken(newAccessToken);
  return newAccessToken;
}

export default getAccessToken;
