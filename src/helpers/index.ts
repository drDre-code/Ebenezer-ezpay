export const yapilyToken = () => {
  const key = process.env.YAPILY_KEY!;
  const secret = process.env.YAPILY_SECRET!;
  return Buffer.from(`${key}:${secret}`).toString('base64');
};
