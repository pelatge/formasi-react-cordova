// src/database/dataSource.tsx
import { DataSource } from 'typeorm';
import localforage from 'localforage';
import { UserSchema } from '../entities/user';

const AppDataSource = new DataSource({
  type: 'browser',
  database: 'my-db',
  driver: localforage,
  entities: [/* Kita akan tambahkan nanti */],
  synchronize: true,
  logging: true,
  entities: [UserSchema],
});

export default AppDataSource;