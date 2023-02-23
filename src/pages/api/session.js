import { withSessionRoute } from "@/lib/withSession";

function sessionRoute(req, res) {
  res.send({ session: req.session });
}

export default withSessionRoute(sessionRoute);
