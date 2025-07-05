const checkString = (input: unknown): input is string => typeof input === 'string';

const checkNumber = (input: unknown): input is number => typeof input === 'number' || !isNaN(Number(input));

const checkNull = (input: unknown): input is null => input === null;

const checkUndefined = (input: unknown): input is undefined => typeof input === 'undefined';

const checkFalsy = (input: unknown): input is false => !!input;

const checkTruthy = (input: unknown): input is true => !checkFalsy(input);

export { checkString, checkNumber, checkNull, checkUndefined, checkFalsy, checkTruthy };
