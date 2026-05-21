import { github } from "../../src/github/client";
import { USERNAME } from "../../src/constants";

export async function fetchFollowing() {
  return github.paginate(github.users.listFollowingForUser, {
    username: USERNAME,
    per_page: 100,
  });
}
