import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ContactList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Contacts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="firstName" source="firstName" />
        <TextField label="lastName" source="lastName" />
        <TextField label="email" source="email" />
        <TextField label="phone" source="phone" />
        <TextField label="leadStatus" source="leadStatus" />
        <TextField label="jobTitle" source="jobTitle" />
        <TextField label="department" source="department" />
        <TextField label="birthdate" source="birthdate" />
        <TextField label="description" source="description" />
        <TextField label="customFields" source="customFields" />
      </Datagrid>
    </List>
  );
};
