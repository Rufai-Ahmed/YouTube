import { BiDislike, BiLike, BiMenuAltLeft } from "react-icons/bi";
import styled from "styled-components";
import img from "../../assets/pix.jpg";

export const Comment = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Amount>
            15,360 Comments
            <Sort>
              <SortIcon />
              <Txt>Sort by</Txt>
            </Sort>
          </Amount>
          <Add>
            <Img src={img} />
            <Input placeholder="Add a comment..." />
          </Add>
          <Other>
            <ImgHold>
              <Img src={img} />
            </ImgHold>
            <Info>
              <NameTime>
                <Name>@IdrisDebi</Name>
                <Time>5 days ago</Time>
              </NameTime>
              <MainComment>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                ratione eligendi est dolorum in unde iste illo suscipit. Magnam
                tempore inventore aperiam quas incidunt modi itaque asperiores
                laborum, impedit deleniti.
              </MainComment>
              <Action>
                <LikeBtn>
                  <Like />
                  <Num>71</Num>
                </LikeBtn>
                <Dislike />
                <Reply>Reply</Reply>
              </Action>
            </Info>
          </Other>
          <Other>
            <ImgHold>
              <Img src={img} />
            </ImgHold>
            <Info>
              <NameTime>
                <Name>@IdrisDebi</Name>
                <Time>5 days ago</Time>
              </NameTime>
              <MainComment>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                ratione eligendi est dolorum in unde iste illo suscipit. Magnam
                tempore inventore aperiam quas incidunt modi itaque asperiores
                laborum, impedit deleniti.
              </MainComment>
              <Action>
                <LikeBtn>
                  <Like />
                  <Num>71</Num>
                </LikeBtn>
                <Dislike />
                <Reply>Reply</Reply>
              </Action>
            </Info>
          </Other>
        </Wrapper>
      </Container>
    </div>
  );
};

const Reply = styled.div``;

const Num = styled.div`
  margin: 0 10px;
`;

const Dislike = styled(BiDislike)`
  font-size: 25px;
  margin: 0 15px;
`;
const Like = styled(BiLike)`
  font-size: 25px;
`;

const LikeBtn = styled.div`
  display: flex;
  align-items: center;
`;

const Action = styled.div`
  display: flex;
  align-items: center;
`;

const MainComment = styled.div`
  margin: 15px 0;
`;

const Time = styled.div`
  font-size: 14px;
`;
const Name = styled.div`
  font-weight: 700;
`;

const NameTime = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Info = styled.div`
  width: 100%;
`;

const ImgHold = styled.div``;

const Other = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  margin: 20px 0;
`;

const Input = styled.input`
  border-bottom: 1px solid grey;
  padding-bottom: 7px;
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: transparent;
  outline: none;
  color: black;
  width: 90%;
  font-size: 17px;

  &::placeholder {
    font-size: 17px;
  }
`;

const Img = styled.div<{ src: string }>`
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Add = styled.div`
  width: 100%;
  padding: 15px 0;
  display: flex;
  gap: 15px;
  align-items: center;
`;

const Txt = styled.div`
  font-size: 20px;
`;

const SortIcon = styled(BiMenuAltLeft)`
  font-size: 25px;
`;

const Sort = styled.div`
  display: flex;
  gap: 15px;
  margin: 0 7%;
  align-items: center;
`;

const Amount = styled.div`
  width: 100%;
  display: flex;
  align-items: end;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 30px 0;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
