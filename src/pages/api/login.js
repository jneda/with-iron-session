import { withSessionRoute } from "@/lib/withSession";

async function loginRoute(req, res) {
  // get user from database then
  req.session.user = {
    id: 230,
    admin: true,
  };
  await req.session.save();
  res.send({ ok: true });
}

export default withSessionRoute(loginRoute);
