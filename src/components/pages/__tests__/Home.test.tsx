import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Home from "../Home";

configure({ adapter: new Adapter() });

describe('home page', () => {
  const wrapper = shallow(<Home />);

  it('renders AddQuestionSection component', () => {
    expect(wrapper.find('AddQestionSection')).toHaveLength(1);
  });

  it('renders VotingSection component', () => {
    expect(wrapper.find('VotingSection')).toHaveLength(1);
  });

  it('renders VotingChart component', () => {
    expect(wrapper.find('VotingChart')).toHaveLength(1);
  });

  it('renders snapshots', () => {
    expect(wrapper).toMatchSnapshot()
  });
});
