import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({ name: 'customText', async: false })
export class HeaderValidator implements ValidatorConstraintInterface {
  validate(value: unknown, args: ValidationArguments) {
    if (typeof value === 'object')
      for (const val of Object.values(value)) {
        if (typeof val !== 'string') return false;
      }
    return true;
  }

  defaultMessage(args: ValidationArguments) {
    return 'header validation failed';
  }
}
