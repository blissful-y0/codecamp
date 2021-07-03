import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {useState} from 'react';
import Head from 'next/head';
import {gql, useMutation} from '@apollo/client';
import {AppContext} from '../../../pages/_app';
import {useContext} from 'react';

export const CRATE_POINT_TRASACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      status
      balance
    }
  }
`;

export default function PaymentDialog({paymentOpen, handleClickToggle}) {
  const [payment, setPayment] = useState(0);
  const {accessToken} = useContext(AppContext);
  const [createPoint] = useMutation(CRATE_POINT_TRASACTION_OF_LOADING);

  const handleChange = (event: React.ChangeEvent<{value: unknown}>) => {
    setPayment(event.target.value as number);
  };

  const onClickRequestPayment = () => {
    // if (payment === 0) return alert('충전 금액을 설정해 주세요');
    // @ts-ignore
    const IMP = window.IMP;
    IMP.init('imp89386405');
    // IMP.request_pay(param, callback) 호출
    IMP.request_pay(
      {
        // param
        pg: 'html5_inicis',
        pay_method: 'card',
        name: `2차 마켓 충전 ${payment}원`,
        amount: Number(payment),
        // buyer_email: 'gildong@gmail.com',
        // buyer_name: '만두왕',
        // buyer_tel: '010-4242-4242',
        // buyer_addr: '서울특별시 강남구 신사동',
        // buyer_postcode: '01181',
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
                authorization: `Bearer ${accessToken}`,
              },
            },
          });
          handleClickToggle();
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
      <Dialog
        open={true}
        onClose={handleClickToggle}
        aria-labelledby="payment-title"
      >
        <DialogTitle id="max-width-dialog-title">
          충전 금액을 선택하세요
        </DialogTitle>
        <DialogContent>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={payment}
            onChange={handleChange}
            style={{width: '200px'}}
          >
            <MenuItem value={1000}>1,000원</MenuItem>
            <MenuItem value={5000}>5,000원</MenuItem>
            <MenuItem value={10000}>10,000원</MenuItem>
            <MenuItem value={50000}>50,000원</MenuItem>
            <MenuItem value={100000}>100,000원</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClickRequestPayment} color="primary">
            충전하기
          </Button>
          <Button onClick={handleClickToggle} color="primary">
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
