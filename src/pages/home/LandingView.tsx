import { useState, useEffect } from "react";
import HomeComp from "../../components/static/home/HomeComp";
import styled from "styled-components";
import { getSearchedVideo } from "../../API/API";

const LandingView = () => {
  const [state, setState] = useState<Array<{}>>([]);

  let cat = JSON.parse(localStorage.getItem("cat")!);

  useEffect(() => {
    getSearchedVideo(cat).then((res) => {
      setState(res?.items);
    });
  }, [cat]);

  return (
    <div>
      <Container>
        {state?.map((props: any) => (
          <HomeComp key={props.id.videoId} props={props} />
        ))}
      </Container>
    </div>
  );
};

export default LandingView;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
