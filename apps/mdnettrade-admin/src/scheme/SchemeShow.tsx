import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SCHEME_TITLE_FIELD } from "./SchemeTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const SchemeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="duration" source="duration" />
        <TextField label="durationUnit" source="durationUnit" />
        <TextField label="fixedReturnPrice" source="fixedReturnPrice" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="price" source="price" />
        <TextField label="returnPercentage" source="returnPercentage" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Investment"
          target="schemeId"
          label="Investments"
        >
          <Datagrid rowClick="show">
            <TextField label="amountInvested" source="amountInvested" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="endDate" source="endDate" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Scheme"
              source="scheme.id"
              reference="Scheme"
            >
              <TextField source={SCHEME_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="startDate" source="startDate" />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
