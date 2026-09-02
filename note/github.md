# Git

### change global username
git config --global user.name "Full Name"
git config --global user.email "email@address.com"



### Commit message
Using Conventional Commits
Many modern development teams enforce the Conventional Commits specification to automate versioning and changelogs. 
This prefixes your subject line with a specific commit type:
feat: A new feature for the application.
fix: A bug fix.docs: Documentation-only changes.
style: Code formatting changes (missing semi-colons, white-space).
refactor: Code changes that neither fix a bug nor add a feature.
perf: A code change that improves performance.
test: Adding missing tests or correcting existing tests.
chore: Updating build tasks, package manager configs, or auxiliary tools



##### Examples of Good vs. Bad Commit Messages❌ 
Bad Examples
fix bug (Too vague, does not explain anything).
Fixed the broken user login validation logic. (Too long, ends with a period, uses past tense).

Good Standard Example
text
Refactor user authentication routing

Move the core authentication logic out of the global router and into a dedicated auth controller. 
This decouples the routing mechanism from user session handling.

コードは注意してご使用ください。
Good Conventional Commits Example
text
feat(auth): add OAuth2 login options for Google and GitHub

Implement backend endpoints and button components to allow users
to authenticate via external identity providers.

Closes #124
コードは注意してご使用ください。
Pro-Tip: Writing Messages in Your Editor
Avoid using the quick git commit -m "message" flag for complex changes. Instead, just run git commit to open your default terminal text editor or configured IDE (like VS Code). This grants you a full-sized workspace to construct structured multi-line messages with proper formatting