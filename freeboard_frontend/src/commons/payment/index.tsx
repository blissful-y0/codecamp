import Head from 'next/head';
import {gql, useMutation} from '@apollo/client';

export const CRATE_POINT_TRASACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      statis
    }
  }
`;

export function PaymentPage(selectedAmount) {
  const [createPoint] = useMutation(CRATE_POINT_TRASACTION_OF_LOADING);
  const onClickPayment = () => {
    // @ts-ignore
    const IMP = window.IMP;
    IMP.init('imp89386405');
    // IMP.request_pay(param, callback) 호출
    IMP.request_pay(
      {
        // param
        pg: 'html5_inicis',
        pay_method: 'card',
        // merchant_uid: 'ORD20180131-0000011',
        name: '철수쿤...',
        amount: selectedAmount,
        m_redirect_url: '/paymentok',
      },
      async (rsp) => {
        // callback
        if (rsp.success) {
          await createPoint({
            variables: {
              impUid: rsp.imp_uid,
            },
            context: {
              headers: {
                authorization:
                  'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGMwODkwN2ZiNzlhMzAwMjkzODMwYmYiLCJwZXJtaXNzaW9uIjowLCJpYXQiOjE2MjM4MjE5MzIsImV4cCI6MTYyMzkwODMzMiwic3ViIjoiYWNjZXNzVG9rZW4ifQ.D9od_YBHAP6cEJkmm637vS9HG8WKs7dTzDCAeT4tIlUrZpqRtnsCdFywOd9ytatwYWqk62dTwEEbgaVh_iC9wg',
              },
            },
          });
          alert('결제에 성공했습니다');
        } else {
          alert('결제에 실패했습니다');
        }
      }
    );
  };

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"
        ></script>
      </Head>
      <div>결제 금액: {selectedAmount}</div>
      <button onClick={onClickPayment}>결제하기</button>
    </>
  );
}

export default PaymentPage;
