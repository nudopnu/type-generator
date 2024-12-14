export function capitalize(name: string) {
  if (name === '') {
    return name;
  }
  if (name.length === 1) {
    return name.toUpperCase();
  }
  return name.at(0)!.toUpperCase() + name.slice(1);
}
