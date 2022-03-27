import React, { FC } from "react";
import {
  Typography, Paper, Grid
} from "@mui/material";
import BarChart from "../bar-chart/BarChart";
import optionsProps from "../../shared/interfaces/OptionsProps";

interface Props {
  question: string;
  options: Array<optionsProps>;
}

const VotingChart: FC<Props> =  ({
                       question,
                       options
                     }: Props): JSX.Element => {
  const totalVotes = options.reduce((sum, option) => option.vote + sum, 0);
  const chartData = {
    labels: options.map((option) => option.answer),
    datasets: [
      {
        label: "answers",
        data: options.map((option) => option.vote),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)"
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)"
        ],
        borderWidth: 1
      }
    ]
  };
  return (
    <Paper variant="outlined" sx={{ flexGrow: 1, my: 2, p: 1.5 }}>
      <Grid container rowSpacing={8}>
        <Grid item sm={12}>
          <Typography
            variant="h5"
            color="secondary"
            align="center"
            sx={{ mb: 4 }}
            gutterBottom
          >
            Voting results
          </Typography>
          <Typography gutterBottom variant="h6">
            {question}
          </Typography>
          <BarChart chartData={chartData} />
        </Grid>
        <Grid item sm={12}>
          <Typography
            component="p"
            variant="subtitle2"
            color="info"
            sx={{ ml: 1, p: 0.3 }}
          >
            {`${totalVotes} votes`}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default VotingChart;
