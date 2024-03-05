

export const getHost = (path?: string) => {
  return path ? `http://${process.env.NEXT_PUBLIC_SERVER_HOST}${path}` : `//${process.env.NEXT_PUBLIC_SERVER_HOST}`;
}