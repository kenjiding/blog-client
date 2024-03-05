

export const getHost = (path?: string) => {
  return path ? `//${process.env.NEXT_PUBLIC_SERVER_HOST}${path}` : `//${process.env.NEXT_PUBLIC_SERVER_HOST}`;
}