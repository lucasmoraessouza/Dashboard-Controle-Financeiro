import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #171821;
  border-radius: 5px;
  padding: 5px 15px;
  width: 30%;
  box-shadow: 0px 0px 5px #000;

  @media (max-width: 750px) {
    width: 20%;
    p {
      font-size: 12px;
    }
    span {
      font-size: 20px;
    }
    svg {
      display: none;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;
  margin: 15px auto;
  svg {
    width: 25px;
    height: 25px;
  }
`;

export const HeaderTitle = styled.p`
  font-size: 20px;
  color: #fff;
`;

export const Total = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: #fff;
`;
