export type FieldsErrors = {
  [field: string]: string[];
};

export interface ValidatorFieldsInterface<PropsValidator> {
  errors: FieldsErrors;
  validateData: PropsValidator;
  validate(data: any): boolean;
}
