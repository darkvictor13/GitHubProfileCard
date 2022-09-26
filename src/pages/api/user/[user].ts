import { GithubUser } from "../../../model/GithubUser";
import type { NextApiRequest, NextApiResponse } from "next";

const server = "https://api.github.com";
const api_path = "users";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GithubUser>
) {
  const { user } = req.query;
  fetch(`${server}/${api_path}/${user}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data: GithubUser) => {
      data.is_valid = true;
      res.status(200).json(data);
    })
    .catch((error: Error) => {
      res.status(500).json({ is_valid: false, error_message: error.message });
    });
}
