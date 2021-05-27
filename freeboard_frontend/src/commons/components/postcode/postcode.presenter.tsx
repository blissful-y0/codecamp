import React from 'react';
import Modal from '@material-ui/core/Modal';
import DaumPostcode from 'react-daum-postcode';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';

function getModalStyle() {
  const top = 30;
  const left = 30;

  return {
    top: `${top}%`,
    left: `${left}%`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      textAlign: 'center',
      width: 550,
    },
  })
);

export default function SimpleModal({handleClose}) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    console.log(Boolean(fullAddress));
    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <DaumPostcode
        onComplete={handleComplete}
        width={'550px'}
        autoClose={true}
      />
    </div>
  );

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      open={true}
      onClose={handleClose}
    >
      {body}
    </Modal>
  );
}
