import React from 'react';
import Rating from '@material-ui/lab/Rating';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      '& > * + *': {
        marginTop: theme.spacing(1),
      },
    },
  })
);

export default function HalfRating({size}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating name="half-rating" size={size} />
    </div>
  );
}
