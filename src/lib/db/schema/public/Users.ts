// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import type { ColumnType, Selectable, Insertable, Updateable } from 'kysely'

import type UserRole from './UserRole'

/** Identifier type for public.users */
export type UsersId = string & { __brand: 'UsersId' }

/** Represents the table public.users */
export default interface UsersTable {
  id: ColumnType<UsersId, UsersId | undefined, UsersId>

  name: ColumnType<string | null, string | null, string | null>

  email: ColumnType<string, string, string>

  email_verified: ColumnType<
    Date | null,
    Date | string | null,
    Date | string | null
  >

  image: ColumnType<string | null, string | null, string | null>

  mobile_phone_number: ColumnType<string | null, string | null, string | null>

  role: ColumnType<UserRole, UserRole, UserRole>

  createdAt: ColumnType<Date, Date | string | undefined, Date | string>

  updatedAt: ColumnType<Date, Date | string | undefined, Date | string>

  deletedAt: ColumnType<Date | null, Date | string | null, Date | string | null>
}

export type Users = Selectable<UsersTable>

export type NewUsers = Insertable<UsersTable>

export type UsersUpdate = Updateable<UsersTable>
