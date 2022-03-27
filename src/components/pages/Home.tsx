import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AddQuestionSection from "../molecules/add-question-section/AddQuestionSection";
import VotingSection from "../molecules/voting-section/VotingSection";
import VotingChart from "../molecules/voting-chart/VotingChart";
import optionsProps from "../shared/interfaces/OptionsProps";

const Home = (): JSX.Element => {
  const [options, setOptions] = useState<Array<optionsProps>>([]);
  const [question, setQuestion] = useState("");

  return (
    <Box sx={{ flexGrow: 1, p: 2, my: 4 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
          <AddQuestionSection
            question={question}
            options={options}
            setOptions={(arg: Array<optionsProps>) => setOptions(arg)}
            setQuestion={setQuestion}
          />
        </Grid>
        <Grid item xs={4}>
          <VotingSection
            options={options} question={question}
            setOptions={(arg: Array<optionsProps>) => setOptions(arg)}
          />
        </Grid>
        <Grid item xs={4}>
          <VotingChart options={options} question={question} />
        </Grid>
      </Grid>
     </Box>
  );
};

export default Home;
