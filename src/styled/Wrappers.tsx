import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

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

export const WrapperModal = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
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
