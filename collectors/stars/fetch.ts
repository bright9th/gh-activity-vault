import { github } from "../../src/github/client";

export async function fetchStars() {
  return github.paginate(github.activity.listReposStarredByAuthenticatedUser, {
    per_page: 100,

    mediaType: {
      previews: ["starfox"],
    },
  });
}
