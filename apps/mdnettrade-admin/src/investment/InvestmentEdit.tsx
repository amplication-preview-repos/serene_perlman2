import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SchemeTitle } from "../scheme/SchemeTitle";
import { UserTitle } from "../user/UserTitle";

export const InvestmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amountInvested" source="amountInvested" />
        <DateTimeInput label="endDate" source="endDate" />
        <ReferenceInput source="scheme.id" reference="Scheme" label="Scheme">
          <SelectInput optionText={SchemeTitle} />
        </ReferenceInput>
        <DateTimeInput label="startDate" source="startDate" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
