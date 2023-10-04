// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import type { UsersId } from './Users'
import type { ColumnType, Selectable, Insertable, Updateable } from 'kysely'

/** Identifier type for public.sessions */
export type SessionsId = string & { __brand: 'SessionsId' }

/** Represents the table public.sessions */
export default interface SessionsTable {
  id: ColumnType<SessionsId, SessionsId | null, SessionsId | null>

  userId: ColumnType<UsersId, UsersId, UsersId | null>

  sessionToken: ColumnType<string, string, string | null>

  expires: ColumnType<Date, Date | string, Date | string | null>
}

export type Sessions = Selectable<SessionsTable>

export type NewSessions = Insertable<SessionsTable>

export type SessionsUpdate = Updateable<SessionsTable>
