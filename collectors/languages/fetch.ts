import { github } from "../../src/github/client";
import { loadRepos } from "../../src/io/dataset";
import { RepoRecord } from "../../src/types/record";
import { requestDelay } from "../../src/utils/delay";

export async function fetchLanguages() {
  const repos: RepoRecord[] = await loadRepos();

  const all = [];

  for (const repo of repos) {
    await requestDelay();

    const languages = await github.repos.listLanguages({
      owner: repo.owner,
      repo: repo.name,
    });

    all.push({
      repo: `${repo.owner}/${repo.name}`,

      languages: languages.data,
    });
  }

  return all;
}
