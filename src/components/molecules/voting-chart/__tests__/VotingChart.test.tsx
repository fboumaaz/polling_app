import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import VotingChart from "../VotingChart";
import { Typography } from "@mui/material";

configure({ adapter: new Adapter() });

describe('VotingChart component', () => {
  const wrapper = shallow(<VotingChart options={[]} question={''} />);

  it('has a title', () => {
    expect(wrapper.find(Typography).at(0).text()).toBe('Voting results');
  });

  it('has a chart bar', () => {
    expect(wrapper.find('BarChart')).toHaveLength(1);
  });

  it('has a counting text', () => {
    expect(wrapper.find(Typography).at(2).text()).toBe('0 votes');
  });

  it('renders snapshots', () => {
    expect(wrapper).toMatchSnapshot()
  });
});
