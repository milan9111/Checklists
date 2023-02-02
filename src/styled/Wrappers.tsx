import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const ContainerApp = styled(Container)`
  @media (min-width: 1536px) {
    max-width: 100%;
  }
  height: 100vh;
  overflow-y: auto;
  position: relative;
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #1976d2;
  }
  &::-webkit-scrollbar-thumb {
    background: #1976d2;
  }
  scrollbar-color: #1976d2 #fff;
  scrollbar-width: thin;
`;

export const WrapperApp = styled(Box)`
  width: 100%;
  margin: 0 auto;
`;

export const WrapperForm = styled(Box)`
  margin: 25px 0px;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const WrapperSearch = styled(Box)`
  margin: 0px 0px;
  display: flex;
  justify-content: end;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const WrapperCheckboxes = styled(Box)`
  display: flex;
`;

export const WrapperTasks = styled(Box)`
  margin: 10px 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
`;

export const WrapperEmptyTasks = styled(Box)`
  text-align: center;
  margin: 50px 0px 0px 0px;
  font-size: 22px;
  color: #d32f2f;
`;

export const WrapperModal = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
  width: 50%;
  padding: 20px 40px;
  background-color: #fff;
  border: 2px solid #1976d2;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  @media (max-width: 768px) {
    width: 90%;
    padding: 20px 10px;
  }
`;
