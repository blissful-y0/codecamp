import {useState} from 'react';

function PaymentPage() {
  const [amount, setAmount] = useState(200);
  const onClickPayment = () => {};

  return (
    <>
      <div>결제 금액: {amount}</div>
      <button onClick={onClickPayment}>결제하기</button>
    </>
  );
}

export default PaymentPage;
