import styled from "styled-components";

export default styled.button`
  appearance: none;
  border: none;
  outline: none;
  height: 60px;
  font-family: inherit;
  font-size: 20px;
  font-weight: 500;
  color: white;
  background: ${({ theme }) => theme.colors.blue_600};
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadow.primary};
`;
