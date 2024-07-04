/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { UserService } from "../user.service";
import { UserCreateInput } from "./UserCreateInput";
import { User } from "./User";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { UserUpdateInput } from "./UserUpdateInput";
import { InvestmentFindManyArgs } from "../../investment/base/InvestmentFindManyArgs";
import { Investment } from "../../investment/base/Investment";
import { InvestmentWhereUniqueInput } from "../../investment/base/InvestmentWhereUniqueInput";

export class UserControllerBase {
  constructor(protected readonly service: UserService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: User })
  async createUser(@common.Body() data: UserCreateInput): Promise<User> {
    return await this.service.createUser({
      data: data,
      select: {
        country: true,
        createdAt: true,
        currency: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        phoneNumber: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [User] })
  @ApiNestedQuery(UserFindManyArgs)
  async users(@common.Req() request: Request): Promise<User[]> {
    const args = plainToClass(UserFindManyArgs, request.query);
    return this.service.users({
      ...args,
      select: {
        country: true,
        createdAt: true,
        currency: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        phoneNumber: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async user(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    const result = await this.service.user({
      where: params,
      select: {
        country: true,
        createdAt: true,
        currency: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        phoneNumber: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateUser(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() data: UserUpdateInput
  ): Promise<User | null> {
    try {
      return await this.service.updateUser({
        where: params,
        data: data,
        select: {
          country: true,
          createdAt: true,
          currency: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          phoneNumber: true,
          roles: true,
          updatedAt: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteUser(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    try {
      return await this.service.deleteUser({
        where: params,
        select: {
          country: true,
          createdAt: true,
          currency: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          phoneNumber: true,
          roles: true,
          updatedAt: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/investments")
  @ApiNestedQuery(InvestmentFindManyArgs)
  async findInvestments(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Investment[]> {
    const query = plainToClass(InvestmentFindManyArgs, request.query);
    const results = await this.service.findInvestments(params.id, {
      ...query,
      select: {
        amountInvested: true,
        createdAt: true,
        endDate: true,
        id: true,

        scheme: {
          select: {
            id: true,
          },
        },

        startDate: true,
        status: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/investments")
  async connectInvestments(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: InvestmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      investments: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/investments")
  async updateInvestments(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: InvestmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      investments: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/investments")
  async disconnectInvestments(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: InvestmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      investments: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }
}
