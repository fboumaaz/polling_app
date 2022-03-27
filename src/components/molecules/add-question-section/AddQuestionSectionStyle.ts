import styled from 'styled-components';
import Box from "@mui/material/Box";

const AddQuestionSectionStyle = styled(Box)`
  .input-group{
    position: relative;
  };
  .text-field{
    width: 80%;
  };
  .input-button {
    position: absolute;
    z-index: 2;
    cursor: pointer;
  }
`;

export default AddQuestionSectionStyle;
