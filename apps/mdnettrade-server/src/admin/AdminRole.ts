import { registerEnumType } from "@nestjs/graphql";

export enum AdminRole {
    SuperAdmin = "SuperAdmin",
    Moderator = "Moderator",
    Editor = "Editor"
}

registerEnumType(AdminRole, {
    name: "AdminRole",
  });