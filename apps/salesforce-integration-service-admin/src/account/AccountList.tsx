import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AccountList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Accounts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
