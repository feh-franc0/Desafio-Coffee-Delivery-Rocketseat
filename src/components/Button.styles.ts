import styled, {css} from 'styled-components';

export type ButtonVarriant = 'primary' | 'secondary' | 'danger' |  'success';

interface ButtonContainerProps {
  variant: ButtonVarriant;
}

const buttonVariants = {
  primary : 'purple',
  secondary : 'orange',
  danger : 'red',
  success: 'green',
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  /* ButtonContainer variant={variant} -> a prop variant vai pra dentro da nossa props q esta na interpolação abaixo */
  ${props => {
    return css`
      background-color: ${buttonVariants[props.variant]}
    `
  }}
`;