import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "@/config/iron-session";

function logoutRoute(req, res) {
  req.session.destroy();
  res.send({ ok: true });
}

export default withIronSessionApiRoute(logoutRoute, ironOptions);
