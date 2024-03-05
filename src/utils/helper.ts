

export const getHost = (path?: string) => {
  return path ? `http://${process.env.NEXT_PUBLIC_SERVER_HOST}${path}` : `http://${process.env.NEXT_PUBLIC_SERVER_HOST}`;
}