export const wrapFailure = <T>(response: T) => ({ success: false, response });
