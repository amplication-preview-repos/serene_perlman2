import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { InvestmentTitle } from "../investment/InvestmentTitle";

export const SchemeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="duration" source="duration" />
        <SelectInput
          source="durationUnit"
          label="durationUnit"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="fixedReturnPrice" source="fixedReturnPrice" />
        <ReferenceArrayInput
          source="investments"
          reference="Investment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InvestmentTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <NumberInput label="price" source="price" />
        <NumberInput label="returnPercentage" source="returnPercentage" />
      </SimpleForm>
    </Create>
  );
};