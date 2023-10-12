import styled from "styled-components";
import vid from "../../assets/vid.mp4";
import img from "../../assets/pix.jpg";
import pic from "../../assets/pix.jpg";
import { BiDislike, BiDownload, BiLike, BiShare } from "react-icons/bi";
import { AiOutlineEllipsis } from "react-icons/ai";
import { Comment } from "./Comment";
import Header from "../../components/static/Header";

export const VidPage = () => {
  return (
    <div>
      <Header />
      <Container>
        <Wrapper>
          <Left>
            <VideoHolder>
              <Vid src={vid} controls />
            </VideoHolder>
            <Text>A million reason to give up</Text>
            <Subscribe>
              <LeftS>
                <ImgHold>
                  <Img src={img} />
                </ImgHold>

                <TxtHold>
                  <Large>Michael</Large>
                  <Small>3.76M subscribers</Small>
                </TxtHold>

                <SubBtn>Subscribe</SubBtn>
              </LeftS>
              <RightS>
                <Button>
                  <Like />
                  <BtnText>160k</BtnText>
                  <Line />
                  <Dislike />
                </Button>
                <Button>
                  <Share />
                  <BtnText>Share</BtnText>
                </Button>
                <Button>
                  <Download />
                  <BtnText>Download</BtnText>
                </Button>
                <Button>
                  <More size={30} />
                </Button>
              </RightS>
            </Subscribe>
            <Info>
              <Texts>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium unde, aliquam quae laborum voluptas doloribus, animi
                reprehenderit veritatis tenetur maxime consequatur, iste velit.
                Totam alias, quisquam nemo vitae architecto at?
              </Texts>
            </Info>
            <Comment />
          </Left>

          <Right>
            <Wrap>
              <Holder>
                <ThumbNail>
                  <Img1 src={pic} />
                  <Timeline>3.00</Timeline>
                </ThumbNail>

                <TxtHolder>
                  <LargeTxt>Dax - Book of Relevations</LargeTxt>
                  <SmallTxt>
                    <Title>Dax</Title>
                    <Views>6.8M views . 5 months ago</Views>
                  </SmallTxt>
                </TxtHolder>
              </Holder>
              <Holder>
                <ThumbNail>
                  <Img1 src={pic} />
                  <Timeline>3.00</Timeline>
                </ThumbNail>

                <TxtHolder>
                  <LargeTxt>Dax - Book of Relevations</LargeTxt>
                  <SmallTxt>
                    <Title>Dax</Title>
                    <Views>6.8M views . 5 months ago</Views>
                  </SmallTxt>
                </TxtHolder>
              </Holder>
              <Holder>
                <ThumbNail>
                  <Img1 src={pic} />
                  <Timeline>3.00</Timeline>
                </ThumbNail>

                <TxtHolder>
                  <LargeTxt>Dax - Book of Relevations</LargeTxt>
                  <SmallTxt>
                    <Title>Dax</Title>
                    <Views>6.8M views . 5 months ago</Views>
                  </SmallTxt>
                </TxtHolder>
              </Holder>
              <Holder>
                <ThumbNail>
                  <Img1 src={pic} />
                  <Timeline>3.00</Timeline>
                </ThumbNail>

                <TxtHolder>
                  <LargeTxt>Dax - Book of Relevations</LargeTxt>
                  <SmallTxt>
                    <Title>Dax</Title>
                    <Views>6.8M views . 5 months ago</Views>
                  </SmallTxt>
                </TxtHolder>
              </Holder>
              <Holder>
                <ThumbNail>
                  <Img1 src={pic} />
                  <Timeline>3.00</Timeline>
                </ThumbNail>

                <TxtHolder>
                  <LargeTxt>Dax - Book of Relevations</LargeTxt>
                  <SmallTxt>
                    <Title>Dax</Title>
                    <Views>6.8M views . 5 months ago</Views>
                  </SmallTxt>
                </TxtHolder>
              </Holder>
              <Holder>
                <ThumbNail>
                  <Img1 src={pic} />
                  <Timeline>3.00</Timeline>
                </ThumbNail>

                <TxtHolder>
                  <LargeTxt>Dax - Book of Relevations</LargeTxt>
                  <SmallTxt>
                    <Title>Dax</Title>
                    <Views>6.8M views . 5 months ago</Views>
                  </SmallTxt>
                </TxtHolder>
              </Holder>
              <Holder>
                <ThumbNail>
                  <Img1 src={pic} />
                  <Timeline>3.00</Timeline>
                </ThumbNail>

                <TxtHolder>
                  <LargeTxt>Dax - Book of Relevations</LargeTxt>
                  <SmallTxt>
                    <Title>Dax</Title>
                    <Views>6.8M views . 5 months ago</Views>
                  </SmallTxt>
                </TxtHolder>
              </Holder>
            </Wrap>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

const Timeline = styled.div`
  padding: 3px 10px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  position: absolute;
  bottom: 18%;
  font-size: 10px;
  border-radius: 5px;
  right: 25%;
`;
const Img1 = styled.img`
  width: 80%;
  border-radius: 15px;
  object-fit: cover;
`;

const Views = styled.div`
  font-size: 15px;
`;

const Title = styled.div`
  font-size: 15px;
`;

const SmallTxt = styled.div`
  font-size: 15px;
`;

const LargeTxt = styled.div`
  font-size: 15px;
  font-weight: 600;
  width: 100%;
`;

const TxtHolder = styled.div`
  width: 50%;
`;

const ThumbNail = styled.div`
  width: 50%;
  position: relative;
`;

const Holder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Wrap = styled.div`
  width: 95%;
  border-top: 1px solid black;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Texts = styled.div`
  font-size: 17px;
  width: 90%;
`;

const Info = styled.div`
  width: 100%;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 20px 0;
`;

const More = styled(AiOutlineEllipsis)`
  font-size: 23px;
`;

const Download = styled(BiDownload)`
  font-size: 23px;
  margin-right: 7px;
`;
const Share = styled(BiShare)`
  font-size: 23px;
  margin-right: 7px;
`;

const Dislike = styled(BiDislike)`
  font-size: 23px;
  margin: 0 5px 0 0;
`;

const Line = styled.div`
  background-color: grey;
  height: 80%;
  width: 1px;
  margin: 0 10px;
`;

const Right = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const BtnText = styled.div``;

const Like = styled(BiLike)`
  font-size: 23px;
  margin: 0 5px 0 0;
`;

const Button = styled.div`
  padding: 0px 10px;
  display: flex;
  background-color: white;
  align-items: center;
  border-radius: 25px;
`;

const RightS = styled.div`
  display: flex;
  gap: 20px;
`;

const SubBtn = styled.div`
  padding: 9px 15px;
  background-color: black;
  color: white;
  font-size: 20px;
  border-radius: 25px;
`;

const Small = styled.div`
  font-size: 12px;
`;

const Large = styled.div`
  font-size: 16px;
  margin: 0;
`;

const TxtHold = styled.div`
  width: 100%;
  margin-right: 15px;
`;

const Img = styled.div<{ src: string }>`
  width: 50px;
  border-radius: 50%;
  height: 50px;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
`;

const ImgHold = styled.div`
  margin: 0 15px;
`;

const LeftS = styled.div`
  display: flex;
  width: 100%;
`;

const Subscribe = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  overflow-y: auto;
  justify-content: space-between;
  gap: 15px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Text = styled.div`
  width: 100%;
  margin: 20px 0;
  font-size: 25px;
  text-transform: capitalize;
  font-weight: 600;
`;

const Vid = styled.video`
  width: 100%;
  object-fit: cover;
  border-radius: 20px;
`;

const VideoHolder = styled.div`
  width: 100%;
`;

const Left = styled.div`
  width: 70%;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  width: 95%;
  display: flex;
  gap: 20px;

  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 80px 0;
  z-index: 2;
`;
