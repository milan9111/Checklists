import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/material/styles";

export const Field = styled(TextField)`
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const Submit = styled(Button)`
  width: 10%;
  margin: 0px 0px 0px 75px;
  font-weight: 600;
  border: 2px solid #1976d2;
  :hover {
    background-color: #1ae948;
    border: 2px solid #1ae948;
    color: #fff;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 50%;
    margin: 20px 0px 0px 0px;
  }
`;

export const FilterCheckbox = styled(FormControlLabel)`
  display: flex;
  margin: 0px;
`;
