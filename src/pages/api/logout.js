import { withSessionRoute } from "@/lib/withSession";

function logoutRoute(req, res) {
  req.session.destroy();
  res.send({ ok: true });
}

export default withSessionRoute(logoutRoute);
