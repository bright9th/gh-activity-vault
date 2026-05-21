import { github } from "../../src/github/client";

export async function fetchPullRequests() {
  return github.paginate(github.issues.listForAuthenticatedUser, {
    filter: "all",
    state: "all",
    per_page: 100,
  });
}
