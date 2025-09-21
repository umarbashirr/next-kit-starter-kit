import "server-only";
import db from "../db";

export const getUser = async (email: string) => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
  });
  return user;
};
