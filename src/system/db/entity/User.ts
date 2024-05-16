import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true, type: 'nvarchar' })
  name?: string

  @Column({ type: 'nvarchar' })
  email?: string

  @Column({ type: 'nvarchar' })
  password?: string

  @Column({ type: 'nvarchar' })
  apiToken?: string

  @Column({ default: 'Bearer', type: 'nvarchar' })
  tokenType?: string

  @Column({ type: 'nvarchar' })
  expiresIn?: string

  @Column({ type: 'datetime' })
  expiresAt?: string

  @Column({ type: 'int' })
  userId?: number

  @Column({ type: 'nvarchar' })
  his?: string

  @Column({ type: 'nvarchar' })
  hash?: string

  @Column({ type: 'int' })
  remainingDay?: number

  @Column({ default: false, type: 'boolean' })
  isVinhVien?: boolean

  @Column({ default: 0, type: 'int' })
  point?: number

  @Column({ default: false, type: 'boolean' })
  isTerms?: boolean
}

export const localUser = async (): Promise<User> =>
  await User.find()
    .then((users: User[]) => users[0])
    .catch(() => new User())
