import {useEffect} from 'react';
import {useState} from 'react';
import HomeUI from './homescreen.presenter';

function Home() {
  const [trade, setTrade] = useState(0);
  const [users, setUsers] = useState(0);
  const [downloads, setDownloads] = useState(0);
  const [returningUsers, setReturningUsers] = useState(0);

  useEffect(() => {
    const onRenderCountDown = setInterval(() => {
      if (trade === 1000) {
        clearInterval(onRenderCountDown);
      } else {
        setTrade(trade + 1);
      }
      if (users === 2000) {
        clearInterval(onRenderCountDown);
      } else {
        setUsers(users + 1);
      }
      if (downloads === 1000) {
        clearInterval(onRenderCountDown);
      } else {
        setDownloads(downloads + 1);
      }
      if (returningUsers === 5000) {
        clearInterval(onRenderCountDown);
      } else {
        setReturningUsers(returningUsers + 1);
      }
    }, 5);

    return () => clearInterval(onRenderCountDown);
  }, [trade, users]);

  return (
    <HomeUI
      trade={trade}
      users={users}
      returningUsers={returningUsers}
      downloads={downloads}
    />
  );
}

export default Home;
