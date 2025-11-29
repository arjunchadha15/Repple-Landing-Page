export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isPurdueEmail(email: string): boolean {
  return email.toLowerCase().endsWith('@purdue.edu');
}
