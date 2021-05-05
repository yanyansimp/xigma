import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { FormFieldProps, Form, Label } from 'semantic-ui-react';

interface IProps extends FieldRenderProps<string, HTMLInputElement>,
    FormFieldProps {}

const TextInput: React.FC<IProps> = ({
  input,
  width,
  type,
  placeholder,
  label,
  meta: { touched, error }
}) => {
  return (
    <Form.Field error={touched && !!error} type={type} width={width}>
      <Form.Input {...input} placeholder={placeholder} label={label}/>
      {touched && error && (
          <Label basic color='red'>
              {error}
          </Label>
      )}
    </Form.Field>
  );
};

export default TextInput;
