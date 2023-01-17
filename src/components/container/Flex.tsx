import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div<Props>`
  display: flex;
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  gap: ${({ gap }) => gap + "px"};
`;

type Props = {
  children: ReactNode;
  align?: "center" | "flex-start" | "flex-end";
  justify?: "space-between" | "center" | "space-around" | "space-evenly";
  gap?: number;
};

const Flex = ({ children, ...props }: Props) => {
  return <Container {...props}>{children}</Container>;
};

export default Flex;
