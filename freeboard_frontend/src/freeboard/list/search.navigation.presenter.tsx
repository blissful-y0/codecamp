import InputBase from '@material-ui/core/InputBase';
import {createStyles, Theme, makeStyles} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

export default function SearchAppBar() {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: '#F2F2F2',
        marginLeft: 0,
        width: '100%',
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
        width: '100%',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        fontSize: '16px',
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      },
    })
  );
  const classes = useStyles();

  const onChangeSearchInput = (event) => {
    const temp = event.target.value;
  };

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        onChange={onChangeSearchInput}
        placeholder="제목을 입력해 주세요."
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{'aria-label': 'search'}}
      />
    </div>
  );
}
