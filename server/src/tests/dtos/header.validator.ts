import { ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

export class HeaderValidator implements ValidatorConstraintInterface {
  validate(value: unknown, args: ValidationArguments) {
    if (typeof value === 'object')
      for (const val of Object.values(value)) {
        if (typeof val !== 'string') return true;
      }
    return false;
  }

  defaultMessage(args: ValidationArguments) {
    return 'header validation failed';
  }
}
