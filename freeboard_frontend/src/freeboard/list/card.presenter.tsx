import {useQuery} from '@apollo/client';
import {FETCH_BEST_BOARD} from './list.query';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {
  CardWrapper,
  ContentsWrapper,
  CreatedAt,
  LikeCount,
  ProfileWrapper,
  ThumpsUpWrapper,
  Title,
  User,
  Wrapper,
} from './card.style';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import {getDate} from '../../commons/libraries/utils';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    width: 300,
    maxHeight: 300,
    marginBottom: 20,
    margin: 10,
    borderRadius: 20,
    boxShadow: '5px, 5px, 10px, rgba(0, 0, 0, 0.1)',
  },
  media: {
    height: 150,
    maxHeight: 150,
  },
});

export default function MediaCard() {
  const classes = useStyles();
  const {data, loading, error} = useQuery(FETCH_BEST_BOARD);
  if (loading) {
    return <></>;
  }
  if (error) {
    return <></>;
  }

  const imageArray = [
    '/cardimage.png',
    '/cardimage2.png',
    '/cardimage3.png',
    '/cardimage4.png',
  ];

  return (
    <>
      <Wrapper>
        {data?.fetchBoardsOfTheBest.map((data, index) => (
          <div key={data._id}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={imageArray[index] || data.images[0]}
                />
                <CardContent>
                  <CardWrapper>
                    <ContentsWrapper>
                      <Title>{data.title}</Title>
                      <ProfileWrapper>
                        <AccountCircleIcon />
                        <User>{data.writer}</User>
                      </ProfileWrapper>
                      <CreatedAt>DATE : {getDate(data.createdAt)}</CreatedAt>
                    </ContentsWrapper>
                    <ThumpsUpWrapper>
                      <ThumbUpIcon
                        style={{
                          width: '28px',
                          height: '30px',
                          color: '#FFD600',
                        }}
                      />
                      <LikeCount>{data.likeCount}</LikeCount>
                    </ThumpsUpWrapper>
                  </CardWrapper>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </Wrapper>
    </>
  );
}
