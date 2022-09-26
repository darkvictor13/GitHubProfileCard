import { GithubUser } from "../../../model/GithubUser";
import { GithubError } from "../../../model/GithubError";
import type { NextApiRequest, NextApiResponse } from "next";

const server = "https://api.github.com";
const api_path = "users";

const headers = () => ({
  Authorization: `Bearer ${process.env.GITHUB_API_KEY}`,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GithubUser | GithubError>
) {
  const { user } = req.query;
  await fetch(`${server}/${api_path}/${user}`, {
    headers: headers(),
  })
    .then(async (response) => {
      res.status(response.status);
      if (!response.ok) {
        const error: GithubError = await response.json();
        res.json(error);
      } else {
        const user: GithubUser = await response.json();
        res.json(user);
      }
    })
    .catch((error) => {
      res.status(500);
      res.json({
        message: error.message,
        documentation_url: "",
      });
    });
}
