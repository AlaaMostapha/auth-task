import React from "react";
import MaterialUiInput from "../Form/Input/MaterialUiInput";
function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "material-ui-input":
      return <MaterialUiInput {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
