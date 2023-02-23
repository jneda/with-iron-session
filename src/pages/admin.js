import { withIronSessionSsr } from "iron-session/next";
import { ironOptions } from "@/config/iron-session";

export default function Admin({ user }) {
  console.log(user);
  return <h1>Welcome !</h1>;
}

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req, res }) {
    const user = req.session.user;

    if (!user || !user.admin) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
        props: {},
      };
    }

    return {
      props: {
        user: req.session.user,
      },
    };
  },
  ironOptions
);
