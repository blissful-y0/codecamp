import Header from './header/header.presenter';

export default function LayoutUI({children}) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}
