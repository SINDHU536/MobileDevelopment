export const USERS = Array.from({ length: 150 }, (_, index) => ({
  id: index.toString(),
  name: `User ${index + 1}`,
}));
