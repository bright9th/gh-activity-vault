import { loadJson } from "./load-json";

export async function loadRepos() {
  return loadJson<any[]>("data/repos/current.json");
}

export async function loadCommits() {
  return loadJson<any[]>("data/commits/current.json");
}

export async function loadIssues() {
  return loadJson<any[]>("data/issues/current.json");
}

export async function loadIssueComments() {
  return loadJson<any[]>("data/issue-comments/current.json");
}

export async function loadPullRequests() {
  return loadJson<any[]>("data/pull-requests/current.json");
}

export async function loadPullRequestReviewComments() {
  return loadJson<any[]>("data/pull-request-review-comments/current.json");
}

export async function loadCommitComments() {
  return loadJson<any[]>("data/commit-comments/current.json");
}
