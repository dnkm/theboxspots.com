export default async function authChecker(req) {
  const auth = req.headers.authorization;
  if (!auth) return undefined;
  const token = auth.split(" ")[1];
  if (!token) return undefined;

  let { uid } = await firebaseAdmin.auth().verifyToken(token);
  if (!uid) return undefined;
  let result = await Query(
    `select user_id, name, email, level, lastLogin from user where uid = ? `,
    [uid]
  );
  if (result.length === 0) {
    console.error("......");
    return undefined;
  }
  return result[0];
}
