import { Scheme as TScheme } from "../api/scheme/Scheme";

export const SCHEME_TITLE_FIELD = "name";

export const SchemeTitle = (record: TScheme): string => {
  return record.name?.toString() || String(record.id);
};
