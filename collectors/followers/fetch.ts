import { github } from "../../src/github/client";
import { USERNAME } from "../../src/constants";

export async function fetchFollowers() {
  return github.paginate(github.users.listFollowersForUser, {
    username: USERNAME,
    per_page: 100,
  });
}
