import { github } from "../../src/github/client";

export async function fetchOrganizations() {
  return github.paginate(github.orgs.listForAuthenticatedUser, {
    per_page: 100,
  });
}
