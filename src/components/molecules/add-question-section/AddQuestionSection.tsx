import React, { FC, useEffect, useState } from "react";
import {
  TextField, Button, Typography,
  Grid, Box, Paper
} from "@mui/material";
import ClearSharpIcon from "@mui/icons-material/ClearSharp";
import { v4 as uuid } from "uuid";

import AddQuestionSectionStyle from "./AddQuestionSectionStyle";
import optionsProps from "../../shared/interfaces/OptionsProps";

interface Props {
  question: string;
  setQuestion: (value: string) => void;
  options: Array<optionsProps>;
  setOptions: (optionsProps: Array<optionsProps>) => void;
};

const AddQestionSection: FC<Props> = ({
                                        question,
                                        options,
                                        setOptions,
                                        setQuestion
                                      }: Props): JSX.Element => {
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [disabled, setDisabled] = useState(!question);
  const [disableButton, setDisableButton] = useState(!currentAnswer);

  const addQuestion = (e: EventTarget & (HTMLTextAreaElement | HTMLInputElement)): void => {
    if (e.value.length >= 80) e.disabled = true;
    else if (e.disabled) e.disabled = false;
    setQuestion(e.value);
  };
  const submitOption = (): void => setOptions([...options, {
    id: uuid(),
    answer: currentAnswer,
    vote: 0
  }]);

  const addOption = (e: EventTarget & (HTMLTextAreaElement | HTMLInputElement)): void => {
    if (e.value.length >= 80) e.disabled = true;
    else if (e.disabled) e.disabled = false;
    setCurrentAnswer(e.value);
  };

  const editOption = (e: EventTarget & (HTMLTextAreaElement | HTMLInputElement)): void => {
    options.map((option) => {
      if (option.id === e.id) option.answer = e.value;
    });
    if (e.value.length >= 80) e.disabled = true;
    else if (e.disabled) e.disabled = false;
    setOptions([...options]);
  };

  const removeOption = (id: string): void => {
    const newOption = options.filter((option) => option.id !== id);
    setOptions([...newOption]);
  };

  const restOptions = (): void => {
    setQuestion('');
    setOptions([]);
  };

  const OptionsList = (
    options.map((option, index) => (
      <div className="input-group" id="input-group" key={index.toString()}>
        <TextField
          label={`Answer-${index + 1}`}
          variant="standard"
          key={`field ${option.id}`}
          id={`${option.id}`}
          defaultValue={option.answer}
          className="text-field"
          inputProps={{ maxLength: 80 }}
          onChange={(e) => editOption(e.target)}
        />
        <Button
          color="error"
          variant="outlined"
          className="input-button"
          sx={{ mt: 3, ml: 2 }}
          onClick={() => removeOption(option.id)}
          size="small"
          key={`button ${index}`}
        >
          <ClearSharpIcon sx={{ fontSize: "medium" }} />
        </Button>
      </div>
    ))
  );

  useEffect(() => {
    setCurrentAnswer("");
    if (options.length >= 10 || !question) {
      setDisabled(true);
    } else if (disabled && question) setDisabled(false);
  }, [options, question]);

  useEffect(() => {
    if (!currentAnswer) {
      setDisableButton(true);
    } else if (disableButton && question && currentAnswer) setDisableButton(false);
  }, [currentAnswer]);

  return (
    <AddQuestionSectionStyle>
      <Paper variant="outlined" sx={{ flexGrow: 1, my: 2, p: 1.5}}>
        <Grid container rowSpacing={8}>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              color="secondary"
              align="center"
              sx={{ mb: 4 }}
              gutterBottom
              key="title"
            >
              Question / Answers form
            </Typography>
            <TextField
              key="question_key"
              label="What's your question?"
              value={question}
              onChange={(e) => addQuestion(e.target)}
              variant="standard"
              inputProps={{ maxLength: 80 }}
              className="text-field"
              id="question_key"
            />
            {OptionsList}
            <div className="input-group">
              <TextField
                label="Add new answer"
                variant="standard"
                key="new_option_key"
                value={currentAnswer}
                disabled={disabled}
                inputProps={{ maxLength: 80 }}
                onChange={(e) => addOption(e.target)}
                className="text-field"
                id="add_new_option"
              />
              <Button
                color="primary"
                sx={{ mt: 2.4, ml: 2, p: 0.3 }}
                className="input-button"
                disabled={disableButton}
                onClick={() => submitOption()}
                variant="contained"
                component="span"
                size="small"
              >
                Add
              </Button>
            </div>
          </Grid>
          <Grid item xs={6}>
            <Box display="flex" justifyContent="start-end">
              <Typography
                component="p"
                variant="subtitle2"
                sx={{ ml: 1, p: 0.3, mt: 1}}
              >
                {`${options.length} / 10 possible answers`}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box display="flex" justifyContent="flex-end">
              <Button
                color="secondary"
                variant="contained"
                sx={{ mb: 1, p: 0.3, mr: 1 }}
                onClick={restOptions}
              >
                Rest
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </AddQuestionSectionStyle>
  );
};

export default AddQestionSection;
