import { ValidatorConstraintInterface, ValidationArguments, validate } from 'class-validator';

export class BlueprintResponseValidator implements ValidatorConstraintInterface {
  async validate(value: unknown, args: ValidationArguments) {
    if (typeof value !== 'object') return true;
    for (const val of Object.values(value)) {
      switch (typeof val) {
        case 'string': {
          continue;
        }
        case 'object':
          {
            if ((await validate(val)).length > 0) return true;
          }
          break;
        default:
          return true;
      }
    }
    return false;
  }

  defaultMessage(args: ValidationArguments) {
    return 'bluepring response validation failed';
  }
}
