/*
    Should redirect to index page passing the username as a query param
*/
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Redirect: NextPage = () => {
  const router = useRouter();
  const { username } = router.query;
  useEffect(() => {
    if (username != undefined) {
      router.push(`/?username=${username}`);
    }
  }, [username]);
  return <div />;
};

export default Redirect;