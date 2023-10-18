import { FC, useEffect, useState } from "react";
import { getChannelDetail } from "../API/API";
import styled from "styled-components";

interface iProps {
  channelID: string;
}

export const AvatarComp: FC<iProps> = ({ channelID }) => {
  const [state, setState]: any = useState<string>("");
  console.log("state: ", state);

  useEffect(() => {
    getChannelDetail(channelID).then((res) => {
      setState(res);
    });
  }, []);

  return (
    <div>
      <Avatar src={state} />
    </div>
  );
};

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: darkorange;
`;
