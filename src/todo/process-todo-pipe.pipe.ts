import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ProcessTodoPipePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value,metadata);
    return value;
  }
}
