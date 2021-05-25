import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Input} from '../modal/Modal.styles'
import {GreyButton} from '../read.style'

export default function ModalUI({ open, handleClose, handleClickOpen, onChangePasswordInput, submittedPassword, handleSendPassword }) {

  return (
    <>
    <GreyButton onClick={handleClickOpen}>수정하기</GreyButton>
    <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {'비밀번호를 입력해 주세요.'}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        <Input
          placeholder={submittedPassword}
          onChange={onChangePasswordInput}
          name="submiitedPassword"
        />
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary">
        취소하기
      </Button>
      <Button onClick={handleSendPassword} color="primary" autoFocus>
        보내기
      </Button>
    </DialogActions>
  </Dialog>
  </>
  )
}