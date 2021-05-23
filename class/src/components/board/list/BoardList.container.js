import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { FETCH_BOARDS } from '../list/BoardList.quries'
import {
  Checkbox,
  Writer,
  ListNumber,
  ListTitle,
  ListWrapper,
  Wrapper,
  NavigationBar,
  SelectButton,
  ButtonWrapper
} from '../list/BoardList.styles'

export default function BoardPage () {
  const router = useRouter()

  const { data, loading, error } = useQuery(FETCH_BOARDS)
  if (loading) {
    return '로딩 중입니다!'
  }
  if (error) {
    return '에러가 발생했습니다!'
  }

  const onClickTitle = (_number) => (event) => {
    router.push(`/list/${_number}`)
  }

  return (
    <>
      <Wrapper>
        <NavigationBar>
          <Checkbox defaultchecked={false} type="checkbox"></Checkbox>
          <ListNumber>번호</ListNumber>
          <ListTitle>제목</ListTitle>
          <Writer>작성자</Writer>
        </NavigationBar>
        {data.fetchBoards.map((data) => (
          <div>
            <ListWrapper>
              <Checkbox
                defaultchecked={false}
                name="checkBox"
                type="checkbox"
              ></Checkbox>
              <ListNumber>{data?.number}</ListNumber>
              <ListTitle onClick={onClickTitle(data?.number)}>
                {data?.title}
              </ListTitle>
              <Writer>{data?.writer}</Writer>
            </ListWrapper>
          </div>
        ))}
        <ButtonWrapper>
          <SelectButton>선택 삭제</SelectButton>
        </ButtonWrapper>
      </Wrapper>
    </>
  )
}
