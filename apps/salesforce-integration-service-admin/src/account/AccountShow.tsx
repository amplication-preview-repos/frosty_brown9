import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AccountShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="industry" source="industry" />
        <TextField label="description" source="description" />
        <TextField label="phone" source="phone" />
        <TextField label="website" source="website" />
        <TextField label="revenue" source="revenue" />
        <TextField label="numberOfEmployees" source="numberOfEmployees" />
        <TextField label="billingAddress" source="billingAddress" />
        <TextField label="shippingAddress" source="shippingAddress" />
        <TextField label="customFields" source="customFields" />
        <TextField label="name" source="name" />
      </SimpleShowLayout>
    </Show>
  );
};
