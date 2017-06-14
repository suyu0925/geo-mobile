export enum Type {
  ALL = 0,
  CMCC = 1,
  CUCC = 2,
  CTCC = 3,
  UNKNOWN = -1
}

export interface Operator {
  name: string
  short: string
  type: Type
}

export const CMCC: Operator
export const CUCC: Operator
export const CTCC: Operator

export enum Level {
  Province = 1,
  City = 2,
  District = 3,
  Street = 4
}

export abstract class Location {
  public code: string
  public name: string
  public level: Level
  public parent: string

  constructor(code: string, level: Level)
  public abstract toString(): string
  public abstract toShort(): string
}

export function queryOperator(phone: string): Operator

export function queryLocation(phone: string): Location
