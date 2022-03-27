import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import AppDrawer from "../AppDrawer";
import { Box, AppBar, Toolbar } from "@mui/material";

configure({ adapter: new Adapter() });

describe("home page", () => {
  const wrapper = shallow(
    <AppDrawer>
      <div />
    </AppDrawer>
  );

  it("renders a Box", () => {
    expect(wrapper.find(Box)).toHaveLength(2);
  });

  it("renders a MuiAppBar", () => {
    expect(wrapper.find(AppBar)).toHaveLength(1);
  });

  it("renders a Toolbar", () => {
    expect(wrapper.find(Toolbar)).toHaveLength(1);
  });

  it("renders snapshots", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
