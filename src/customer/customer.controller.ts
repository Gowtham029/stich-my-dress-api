import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CustomersService } from './customer.service';
import { Customer } from './interfaces/customer.interface';
import { ApiParam } from '@nestjs/swagger';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) { }

  @Get()
  async findAll(): Promise<Customer[]> {
    const result = await this.customersService.findAll();
    return result;
  }

  @Post()
  async create(@Body() createCustomerDto: CreateCustomerDto) {
    await this.customersService.create(createCustomerDto);
  }

  @Put("/:id")
  @ApiParam({ name: "id" })
  async update(@Param("id") id, @Body() createCustomerDto: CreateCustomerDto) {
    const result = await this.customersService.update(id, createCustomerDto);
    return result;
  }

  @Get("/:id")
  @ApiParam({ name: "id" })
  async findOne(@Param("id") id): Promise<Customer> {
    const result = await this.customersService.findOne(id);
    return result
  }
}
