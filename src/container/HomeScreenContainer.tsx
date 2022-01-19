import React, { ReactElement } from "react";
import { connect } from "react-redux";
import { HomeScreen } from "components/screens";
import type { RootState } from "store";
const mapStateToProps = (
  state: RootState
): React.ComponentProps<typeof HomeScreen> => ({
  background: state.RootReducer.background,
});

export default connect(mapStateToProps)(HomeScreen);
