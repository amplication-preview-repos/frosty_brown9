import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const AccountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="industry" source="industry" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="phone" source="phone" />
        <TextInput label="website" source="website" />
        <NumberInput label="revenue" source="revenue" />
        <NumberInput
          step={1}
          label="numberOfEmployees"
          source="numberOfEmployees"
        />
        <div />
        <div />
        <div />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
