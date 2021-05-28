import {Footer, Header} from './layout.style';

const LayoutUI = ({children}) => {
  return (
    <>
      <Header></Header>
      <div>헤더영역</div>
      {children}
      <div>푸터영역</div>
      <Footer></Footer>
    </>
  );
};

export default LayoutUI;
