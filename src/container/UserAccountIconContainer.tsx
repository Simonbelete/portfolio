import React from "react";
import { connect } from "react-redux";
import { UserAccountIcon } from "components";
import type { RootState } from "store";

const mapStateToProps = (
  state: RootState
): React.ComponentProps<typeof UserAccountIcon> => ({
  image: state.RootReducer.user.image,
  name: state.RootReducer.user.name,
});

export default connect(mapStateToProps)(UserAccountIcon);
