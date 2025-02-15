// src/entities/user.tsx
import { EntitySchema } from 'typeorm';

export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

export const UserSchema = new EntitySchema<User>({
  name: 'User',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    age: {
      type: Number,
      nullable: true,
    },
  },
});