import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly mobile: { primary: string, secondary: string };

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly dob: { type: Date };

  @ApiProperty()
  readonly city: string;

  @ApiProperty()
  readonly address: string;

  @ApiProperty()
  readonly location: {
    type: {
      type: string,
      enum: ['Point'],
    },
    coordinates: {
      type: [number],
    }
  };

  @ApiProperty()
  readonly enableUpdates: boolean;
}
