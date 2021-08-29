import React, {Fragment} from 'react';
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

export default function SimpleModal({handleClose, open, setData}) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let zonecode = data.zonecode;
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

    setData((prev) => ({
      ...prev,
      boardAddress: {
        zipcode: zonecode,
        address: fullAddress,
      },
    }));

    handleClose();
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
    <Fragment>
      {open && (
        <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          open={true}
          onClose={handleClose}
        >
          {body}
        </Modal>
      )}
    </Fragment>
  );
}
