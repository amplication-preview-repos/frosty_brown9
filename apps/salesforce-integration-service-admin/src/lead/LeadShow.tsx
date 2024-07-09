import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const LeadShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="company" source="company" />
        <TextField label="status" source="status" />
        <TextField label="source" source="source" />
        <TextField label="customFields" source="customFields" />
        <TextField label="rating" source="rating" />
      </SimpleShowLayout>
    </Show>
  );
};
