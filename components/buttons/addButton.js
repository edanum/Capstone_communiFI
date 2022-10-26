import Image from "next/image";
import addButton from "../../public/add_button.svg";
import styled from "styled-components";

export default function AddButton() {
  return (
    <ToPosition>
      <Image src={addButton} width={60} height={60} />{" "}
    </ToPosition>
  );
}

const ToPosition = styled.div`
  position: fixed;
  bottom: 60px;
  right: 15px;
  z-index: 3;
`;