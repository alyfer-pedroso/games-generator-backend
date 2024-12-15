/**
 * Checks if any of the given values are null or undefined
 * @param values The values to check
 * @returns True if any of the values are null or undefined, false otherwise
 */
export const IsEmpty = (values: any[]) => {
  if (values.length === 0 || values.includes(undefined) || values.includes(null)) {
    throw new Error("Preencha todos os campos corretamente!");
  }
};
