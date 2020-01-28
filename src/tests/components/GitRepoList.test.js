import React from 'react';
import { shallow } from 'enzyme';
import GitRepoList from '../../components/GitRepoList';
import SearchUser from '../../components/SearchUser';
import GitRepo from '../../components/GitRepo';

const sampleRepoList = [
    {
        "id": 234516014,
        "node_id": "MDEwOlJlcG9zaXRvcnkyMzQ1MTYwMTQ=",
        "name": "job_portal_service",
        "full_name": "avickmukh/job_portal_service",
        "private": false,
        "owner": {
          "login": "avickmukh",
          "id": 24540462,
          "node_id": "MDQ6VXNlcjI0NTQwNDYy",
          "avatar_url": "https://avatars3.githubusercontent.com/u/24540462?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/avickmukh",
          "html_url": "https://github.com/avickmukh",
          "followers_url": "https://api.github.com/users/avickmukh/followers",
          "following_url": "https://api.github.com/users/avickmukh/following{/other_user}",
          "gists_url": "https://api.github.com/users/avickmukh/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/avickmukh/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/avickmukh/subscriptions",
          "organizations_url": "https://api.github.com/users/avickmukh/orgs",
          "repos_url": "https://api.github.com/users/avickmukh/repos",
          "events_url": "https://api.github.com/users/avickmukh/events{/privacy}",
          "received_events_url": "https://api.github.com/users/avickmukh/received_events",
          "type": "User",
          "site_admin": false
        },
        "html_url": "https://github.com/avickmukh/job_portal_service",
        "description": "It is simple service with few data, build up on Node js express",
        "fork": false,
        "url": "https://api.github.com/repos/avickmukh/job_portal_service",
        "forks_url": "https://api.github.com/repos/avickmukh/job_portal_service/forks",
        "keys_url": "https://api.github.com/repos/avickmukh/job_portal_service/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/avickmukh/job_portal_service/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/avickmukh/job_portal_service/teams",
        "hooks_url": "https://api.github.com/repos/avickmukh/job_portal_service/hooks",
        "issue_events_url": "https://api.github.com/repos/avickmukh/job_portal_service/issues/events{/number}",
        "events_url": "https://api.github.com/repos/avickmukh/job_portal_service/events",
        "assignees_url": "https://api.github.com/repos/avickmukh/job_portal_service/assignees{/user}",
        "branches_url": "https://api.github.com/repos/avickmukh/job_portal_service/branches{/branch}",
        "tags_url": "https://api.github.com/repos/avickmukh/job_portal_service/tags",
        "blobs_url": "https://api.github.com/repos/avickmukh/job_portal_service/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/avickmukh/job_portal_service/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/avickmukh/job_portal_service/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/avickmukh/job_portal_service/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/avickmukh/job_portal_service/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/avickmukh/job_portal_service/languages",
        "stargazers_url": "https://api.github.com/repos/avickmukh/job_portal_service/stargazers",
        "contributors_url": "https://api.github.com/repos/avickmukh/job_portal_service/contributors",
        "subscribers_url": "https://api.github.com/repos/avickmukh/job_portal_service/subscribers",
        "subscription_url": "https://api.github.com/repos/avickmukh/job_portal_service/subscription",
        "commits_url": "https://api.github.com/repos/avickmukh/job_portal_service/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/avickmukh/job_portal_service/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/avickmukh/job_portal_service/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/avickmukh/job_portal_service/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/avickmukh/job_portal_service/contents/{+path}",
        "compare_url": "https://api.github.com/repos/avickmukh/job_portal_service/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/avickmukh/job_portal_service/merges",
        "archive_url": "https://api.github.com/repos/avickmukh/job_portal_service/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/avickmukh/job_portal_service/downloads",
        "issues_url": "https://api.github.com/repos/avickmukh/job_portal_service/issues{/number}",
        "pulls_url": "https://api.github.com/repos/avickmukh/job_portal_service/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/avickmukh/job_portal_service/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/avickmukh/job_portal_service/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/avickmukh/job_portal_service/labels{/name}",
        "releases_url": "https://api.github.com/repos/avickmukh/job_portal_service/releases{/id}",
        "deployments_url": "https://api.github.com/repos/avickmukh/job_portal_service/deployments",
        "created_at": "2020-01-17T09:30:33Z",
        "updated_at": "2020-01-17T09:30:42Z",
        "pushed_at": "2020-01-17T09:30:40Z",
        "git_url": "git://github.com/avickmukh/job_portal_service.git",
        "ssh_url": "git@github.com:avickmukh/job_portal_service.git",
        "clone_url": "https://github.com/avickmukh/job_portal_service.git",
        "svn_url": "https://github.com/avickmukh/job_portal_service",
        "homepage": null,
        "size": 0,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": null,
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "forks_count": 0,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 0,
        "license": null,
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "master"
      }
]
describe('Test GitRepoList Component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<GitRepoList 
      repos={sampleRepoList}
      getRepoListByUserName={()=>{}}
      isLoading={false}
      />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('There will be one Search User Component', () => {
        expect(wrapper.find(SearchUser)).toHaveLength(1);
  })
  it('There will be one GitRepo Component we passed only one repo', () => {
    expect(wrapper.find(GitRepo)).toHaveLength(1);
})
})
