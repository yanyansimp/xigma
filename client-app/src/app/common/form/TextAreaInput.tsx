import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { FormFieldProps, Form, Label } from 'semantic-ui-react';

interface IProps
  extends FieldRenderProps<string, HTMLTextAreaElement>,
    FormFieldProps {}

const TextAreaInput: React.FC<IProps> = ({
  input,
  width,
  rows,
  label,
  placeholder,
  meta: { touched, error }
}) => {
  return (
    <Form.Field error={touched && !!error} width={width}>
      <Form.TextArea rows={rows} {...input} placeholder={placeholder} label={label} />
      {/* <textarea rows={rows} {...input} placeholder={placeholder} /> */}
      {touched && error && (
        <Label basic color="red">
          {error}
        </Label>
      )}
    </Form.Field>
  );
};

export default TextAreaInput;
