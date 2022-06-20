import styled from "styled-components";

export const Table = styled.table`
  width: 98%;
  background-color: #171821;
  padding: 20px;
  box-shadow: 0px 0px 5px #000;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody`
  color: #fff;
`;

export const Tr = styled.tr``;

export const Th = styled.th`
  color: #fff;
  text-align: start;
  border-bottom: inset;
  border-color: #21222d;
  padding-bottom: 5px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width + "%" : "auto")};
`;
