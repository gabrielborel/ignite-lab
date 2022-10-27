import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Student {
  @Field()
  id: string;

  // @Field(() => [])
  // enrollments: Enrollment[]
}
