import 'reflect-metadata'
import { DataSource, EntityTarget, ObjectLiteral, Repository, SelectQueryBuilder } from 'typeorm'
import { User } from './entity'
import { DB_FILE } from '../helper'

export const AppDataSource = new DataSource({
  type: 'better-sqlite3',
  database: DB_FILE,
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: []
})

export const getRepo = (entity: EntityTarget<ObjectLiteral>): Repository<ObjectLiteral> => {
  return AppDataSource.getRepository(entity)
}

export const getQB = (entity: EntityTarget<ObjectLiteral>): SelectQueryBuilder<ObjectLiteral> => {
  const alias = entity as string
  return getRepo(entity).createQueryBuilder(alias.toLowerCase())
}
