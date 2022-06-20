import React from "react";
import ResumeItem from "../ResumeItem";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";
const Resume = ({ income, expense, total }) => {
  return (
    <C.Container>
      <ResumeItem
        title="Entradas"
        value={income}
        Icon={FaRegArrowAltCircleUp}
        color="green"
      />
      <ResumeItem
        title="Saídas"
        value={expense}
        Icon={FaRegArrowAltCircleDown}
        color="red"
      />
      <ResumeItem
        title="Total"
        value={total}
        Icon={FaDollarSign}
        color="white"
      />
    </C.Container>
  );
};

export default Resume;
