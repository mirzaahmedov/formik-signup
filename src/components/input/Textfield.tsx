import { InputHTMLAttributes } from "react";
import styled from "styled-components";

const ContainerLabel = styled.label`
  display: block;
  position: relative;
  font-size: 1rem;
  margin-top: 1.5em;
`;
const InputField = styled.input`
  appearance: none;
  border: 2px solid transparent;
  outline: none;
  width: 100%;
  height: 3.5em;
  padding: 0 20px;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  color: ${({ theme }) => theme.colors.slate_900};
  background-color: ${({ theme }) => theme.colors.slate_50};
  border-radius: 5px;
  transition: border-color
    ${({ theme }) =>
      `${theme.animation.speed}ms ${Number(theme.animation.speed) / 2}ms`};

  :focus {
    border: 2px solid ${({ theme }) => theme.colors.blue_600};
  }
`;
const LabelText = styled.span`
  display: block;
  position: absolute;
  top: 50%;
  left: 20px;
  font-size: 1em;
  font-weight: 500;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.slate_400};
  transform: translate(0, -0.75em); // 0.75em + 1em
  transition: transform ${({ theme }) => theme.animation.speed + "ms"},
    color ${({ theme }) => theme.animation.speed + "ms"};

  ${InputField}:focus + & {
    color: ${({ theme }) => theme.colors.blue_600};
    transform: translate(-20px, -3.25em);
  }
`;
const Sign = styled.span`
  color: ${({ theme }) => theme.colors.red_500};
`;

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

const Textfield = ({ label, ...props }: Props) => {
  return (
    <ContainerLabel>
      <InputField type="text" {...props} />
      <LabelText>
        {label}
        {props.required ? <Sign>*</Sign> : ""}
      </LabelText>
    </ContainerLabel>
  );
};

export default Textfield;
