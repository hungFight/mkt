import { FindManyOptions, FindOptionsWhere, ObjectID, ObjectLiteral } from 'typeorm'

declare global {
  type GetPayload = FindManyOptions<ObjectLiteral>

  type GetByPayload = FindOptionsWhere<ObjectLiteral> | FindOptionsWhere<ObjectLiteral>[]

  type DeletePayload =
    | string
    | number
    | FindOptionsWhere<ObjectLiteral>
    | Date
    | ObjectID
    | string[]
    | number[]
    | Date[]
    | ObjectID[]
}
