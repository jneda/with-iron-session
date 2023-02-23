import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "@/config/iron-session";

function userRoute(req, res) {
  res.send({ user: req.session.user });
}

export default withIronSessionApiRoute(userRoute, ironOptions);
