import Header from './header/header.presenter';
import Body from './body.presnter';

const withoutNavigation = ['/board', '/query'];

export default function LayoutUI({children}) {
  return (
    <>
      <Header />
      <Body children={children} />
    </>
  );
}
