import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Customer } from './interfaces/customer.interface';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomersService {
  constructor(@InjectModel('Customer') private readonly customerModel: Model<Customer>) { }

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const createdCustomer = await new this.customerModel(createCustomerDto);
    return createdCustomer.save();
  }

  async findAll(): Promise<Customer[]> {
    return await this.customerModel.find().exec();
  }

  async findOne(id: string): Promise<Customer> {
    return await this.customerModel.findById(id).exec();
  }

  async update(id: string, updateCustomerDto: CreateCustomerDto): Promise<Customer> {
    const createdCustomer = await this.customerModel.findByIdAndUpdate(id, updateCustomerDto)
    return createdCustomer.save();
  }
}
