import React from "react";
import { GithubUser } from "../model/GithubUser";
import UserInfo from "./UserInfo";
import styles from "../styles/UserCard.module.css";

function UserCard({ user }: { user: GithubUser }) {
  return (
    <a id="github_profile_card" className={styles.card} href={user.html_url}>
      <h2>User: {user.login}</h2>
      <img src={user.avatar_url} width={300} />
      <UserInfo field="About" value={user.bio || ""} />
      <UserInfo field="Location" value={user.location || ""} />
      <UserInfo field="Name" value={user.name || ""} />
      <UserInfo field="Email" value={user.email || ""} />
      <UserInfo field="Twitter" value={user.twitter_username || ""} />
      <UserInfo field="Company" value={user.company || ""} />
      <UserInfo field="Followers" value={user.followers?.valueOf().toString() || ""} />
      <UserInfo field="Following" value={user.following?.valueOf().toString() || ""} />
      <UserInfo field="Public Repos" value={user.public_repos?.valueOf().toString() || ""} />
    </a>
  );
}

export default UserCard;
