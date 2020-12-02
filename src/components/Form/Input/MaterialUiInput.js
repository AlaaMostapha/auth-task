import React from "react";
import { Field } from "formik";
import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@material-ui/core";

function MaterialUiInput(props) {
  const { label, name, ...rest } = props;
  return (
    <div>
      <Field name={name}>
        {({ field, meta }) => {
          return (
            <FormControl error={meta.touched && meta.error}>
              {/* {console.log(name, meta.touched, meta.error)} */}
              <InputLabel htmlFor={name}>{label}</InputLabel>
              <Input id={name} {...field} {...rest} />
              {meta.touched && meta.error ? (
                <FormHelperText id={meta.error}>{meta.error}</FormHelperText>
              ) : null}
            </FormControl>
          );
        }}
      </Field>
    </div>
  );
}

export default MaterialUiInput;
