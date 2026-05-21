import { github } from "../../src/github/client";
import { USERNAME } from "../../src/constants";

export async function fetchRepos() {
  return github.paginate(github.repos.listForUser, {
    username: USERNAME,
    per_page: 100,
  });
}
