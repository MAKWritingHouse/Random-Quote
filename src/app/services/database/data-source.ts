import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entities/User';

export const AppDataSource = new DataSource({
	type: 'mysql',
	host: 'localhost',
	port: 3306,
	username: 'test',
	password: 'test',
	database: 'test',
	synchronize: true,
	logging: true,
	entities: ['src/app/services/database/entities/**/*.ts'],
	migrations: ['src/app/services/database/migrations/**/*.ts'],
	subscribers: ['src/app/services/database/subscribers/**/*.ts'],
});
