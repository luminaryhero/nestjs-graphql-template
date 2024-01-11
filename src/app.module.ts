import { Module } from '@nestjs/common';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import { ConfigurationsModule } from './configurations/configurations.module';
import { DatabasesModule } from './databases/databases.module';

@Module({
  imports: [
    DatabasesModule,
    ConfigurationsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    UsersModule,
  ],
})
export class AppModule {}
