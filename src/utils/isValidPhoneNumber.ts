const phoneNumberRegex = /^7\d{10}$/
export function isValidPhoneNumber(phoneNumber: string): boolean {
  return phoneNumberRegex.test(phoneNumber)
}
