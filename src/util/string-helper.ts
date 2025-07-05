const mergeClassNames = (...classes: (string | false | null | undefined)[]): string => {
  return classes.filter(Boolean).join(' ');
};

export { mergeClassNames };
