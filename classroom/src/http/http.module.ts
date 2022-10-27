import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '../database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import path from 'node:path';
import { StudentsResolver } from './graphql/resolvers/students.resolver';
import { StudentsService } from 'src/services/students.service';
import { CoursesResolver } from './graphql/resolvers/courses.resolver';
import { CoursesService } from 'src/services/courses.service';
import { EnrollmentsResolver } from './graphql/resolvers/enrollments.resolver';
import { EnrollmentsService } from 'src/services/enrollments.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [
    StudentsResolver,
    CoursesResolver,
    EnrollmentsResolver,
    EnrollmentsService,
    CoursesService,
    StudentsService,
  ],
})
export class HttpModule {}
