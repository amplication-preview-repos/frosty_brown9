import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

export const ContactEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="firstName" source="firstName" />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="phone" source="phone" />
        <SelectInput
          source="leadStatus"
          label="leadStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="jobTitle" source="jobTitle" />
        <TextInput label="department" source="department" />
        <DateTimeInput label="birthdate" source="birthdate" />
        <TextInput label="description" multiline source="description" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
