import styled from 'styled-components'

interface RandomdateContainerProps {
  size: string;
}

export const RandomDateContainer = styled.div<RandomdateContainerProps>`
  display: flex;
  justify-content: center;
  margin-top: 1rem;// 1.25rem;
  color: ${(props) => props.theme['green-500']};
  font-size: ${(props) => props.size};
  font-weight: 700;
  animation: random-date-fade-out 4s;

  @keyframes random-date-fade-out {
  from {background-color: red;}
  to {background-color: yellow;}
}
`
