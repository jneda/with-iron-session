import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "@/config/iron-session";

async function loginRoute(req, res) {
  // get user from database then
  req.session.user = {
    id: 230,
    admin: false,
  };
  await req.session.save();
  res.send({ ok: true });
}

export default withIronSessionApiRoute(loginRoute, ironOptions);
