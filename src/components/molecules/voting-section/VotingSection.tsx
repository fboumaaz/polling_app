import React, { FC, useState } from "react";
import {
  RadioGroup, FormControlLabel, Radio,
  Button, Typography, Grid, Box, Paper
} from "@mui/material";
import optionsProps from "../../shared/interfaces/OptionsProps";

interface Props {
  question: string;
  options: Array<optionsProps>;
  setOptions: (optionsProps: Array<optionsProps>) => void;
}

const VotingSection: FC<Props> = ({
                                    question,
                                    options,
                                    setOptions
                                  }: Props): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState('');
  const OptionsList = (
    options.map((option) => (
      <FormControlLabel
        value={option.id}
        control={<Radio />}
        onChange={() => setSelectedOption(option.id)}
        label={option.answer}
        key={option.id}
      />
    ))
  );

  const vote = (() => {
    options.map((option) => {
      if (option.id === selectedOption) option.vote += 1;
    });
    setOptions([...options]);
  });

  return (
    <Paper variant="outlined" sx={{ flexGrow: 1, my: 2, p: 1.5 }}>
      <Grid rowSpacing={8} container>
        <Grid item sm={12}>
          <Typography
            variant="h5"
            color="secondary"
            align="center"
            sx={{ mb: 4 }}
            gutterBottom
          >
            Voting section
          </Typography>
          <Typography gutterBottom variant="h6" color="info">
            {question}
          </Typography>
          <RadioGroup>
            {OptionsList}
          </RadioGroup>
        </Grid>
        <Grid item sm={12}>
          <Box display="flex" justifyContent="flex-end">
            <Button
              color="secondary"
              variant="contained"
              sx={{ mb: 1, ml: 1, p: 0.3, mr: 1 }}
              disabled={options.length < 2}
              onClick={() => vote()}
              data-testid="voting-button"
            >
              Vote
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default VotingSection;
