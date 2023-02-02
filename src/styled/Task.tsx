import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";

export const Task = styled(Box)`
  margin: 10px 0px;
  padding: 15px 0px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 2px solid #1976d2;
  border-radius: 7px;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

export const TaskButton = styled(IconButton)`
  margin: 0px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TaskCheckbox = styled(Checkbox)`
  margin: 0px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TaskNumber = styled(Box)`
  margin: 0px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TaskText = styled(Box)`
  width: 75%;
  margin: 0px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-wrap: anywhere;
`;
