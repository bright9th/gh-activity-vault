import { github } from "../../src/github/client";

export async function fetchGists() {
  return github.paginate(github.gists.list, {
    per_page: 100,
  });
}
