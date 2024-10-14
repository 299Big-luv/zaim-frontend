// moduleの方でステータスコード返してくれない とりあえずの実装
export const useApiError = (error: unknown) => {
  if (error instanceof Error) {
    return error.message
  }
  else if (typeof (error) === 'object' && Object.prototype.hasOwnProperty.call(error, 'message')) {
    return Object(error).message
  }
  else {
    return String(error)
  }
}
