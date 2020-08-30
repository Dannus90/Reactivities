import React from 'react'
import { FieldRenderProps} from "react-final-form";
import { FormFieldProps, Label, Form} from "semantic-ui-react";
import {DateTimePicker} from "react-widgets";

interface IProps extends FieldRenderProps<Date, HTMLElement>, FormFieldProps {}

const DateInput: React.FC<IProps> = ({input, width, placeholder, date = false, time = false, meta: {touched, error}, ...rest
}) => {
  return (
    <Form.Field error={touched && !!error} width={width}>
      {/* REMOVED {...rest} from DateTimePicker */}
    <DateTimePicker placeholder={placeholder} value={input.value || null} onChange={input.onChange} date={date} time={time}/>
    {touched && error && (
      <Label basic color="red">{error}</Label>
    )}
  </Form.Field>)
  
}

export default DateInput
