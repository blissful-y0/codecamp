import LayoutUI from './layout.presenter';

const Layout = ({children}) => {
  return (
    <>
      <LayoutUI children={children} />
    </>
  );
};

export default Layout;
