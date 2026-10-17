# sloptaumatons — status

Revived 2026-10-08 as the user's AI company. Until then this repo was only the
holding-company site (`index.html`, `why.html` — the prospectus is the brand voice; read
it first). Everything below was settled with him in one late-night session; the story is
in `documentary/`.

## Resume here
Design is talked through; **nothing is built.** Next: a short design note for the feed —
what a card is, which reactions it supports, how a lane moves material between stages —
then the first build: **the feed + the posts lane** (93 harvested drafts mean there is
something to scroll on day one). Open decision (his): build the feed standalone or inside
fringe, if fringe resumes.

## Purpose (user)
Real business with minimal human effort. Revenue from **everything except** the passion
projects (slowglass, muboneapp… ship on his schedule regardless of market fit): the
million product ideas, the byproducts of the work he cares about (e.g. his approach to
agents), and the output of the sloptaumatic processes themselves.

**KPIs:** how much money, how fast — speed and quantity, without sucking, without eating
his time (or at least fun when it does). Don't pick one venture: get many things in
front of people in measurable ways and lean toward the reaction.

## The machine
Pipelines that refine material stage by stage through the lens of his taste — e.g. game
ideas → he reacts → prototypes → he reacts → … → a game he enjoys playing → published,
earning. His whole job, ideally: a little feedback every day, scrolling a feed over lunch
or before bed.

- **One feed, many lanes.** Each lane moves material through stages; his reaction at a
  stage decides what advances and how.
- **Reactions are the training data.** Every verdict is kept; agents read the history
  before making the next batch, so their taste converges on his.
- **Tiller-shaped, not tiller.** The retired tiller (`archive/2026/tiller`: phone card
  feed, reply/park gestures, web push) is the ancestor. What retired it: it drifted into
  an agent-orchestration harness. Guard: **the feed holds material** (drafts,
  prototypes, builds, listings) — never agents, sessions or controls. An agent that needs
  a decision puts material in front of him and reads the reaction.

**Lanes** — a sense, not a fixed list (user): posts, blogs, itch.io games, tiny tools,
agent tools, agent kits, generative art, byproduct tools (boardwalk, jig…); parts maybe.
All outlets must be free to list (see rules). Earlier idea inventory: `ideas.md`.

**Inputs — not only him** (user): scrape value passively and actively from everywhere.
- His work: `projects/` as it evolves, Claude Code session logs (`~/.claude/projects/`),
  documentary logs, kanban dreaming/someday cards, skills and wiki changes.
- The world, **read only**: what sells (itch.io, Printables, Gumroad discover), stated
  demand (upvoted GitHub feature requests, "is there a tool that…" threads), agent-
  ecosystem gaps (empty MCP registry searches), calendars (jam themes, seasons).
- Our own results: views, downloads, sales, engagement — fed back beside his verdicts.
- **Hard guardrail (proposed):** anything from `~/life` (money, health, family) is
  dropped at ingestion, in code — never left to an agent's discretion.

## Ground rules (user) — guide all sloptaumaton work
- **Agents never post into human communities** (Reddit, forums, Discords…). If we post
  there, he writes it. Agents post only on the company's own labelled accounts.
- **Agents never post as him.** His name can be on the company; the company account is
  the agents' voice, labelled as a bot; he is its editor.
- **Spend stays below earnings.** Earnings are zero, so spend is zero: no ads, no new
  domains (paths/subdomains of sloptaumatons.com on GitHub Pages), no paid listings
  (Steam, Etsy, Play Store wait for earnings).
- **No services for now** — products only.
- **Agents own their merges** (user, 2026-10-17): "I should not need to authorize these merges.
  You guys (ultimately, you specifically) own the feed and any repos related to it." Each
  sloptaumatons agent merges its branches to its own repo's main (`--no-ff`, never push); the
  sloptaumautomatic orchestrator is accountable for all of them.

## Brand shape
- **House of brands.** Products live on their own storefronts where buyers already are,
  footer credit "made by recursive sloptaumatons" linking back.
- **sloptaumatons.com = the portfolio**; every shipped product is a case study.
- **Posts show the work** (artifacts, demos, documentary excerpts), never engagement bait.

## The posts lane — v.ibepost
`projects/vibepost` (back from `archive/2026`, 2026-10-08) becomes this lane's home; its
original design intent (a multi-channel cross-poster) gets refactored, possibly
drastically. Harvest list: `reports/post-draft-inventory.md` there — 76 tweet drafts +
17 short scripts, all unposted, all written as "my AI" so they need rewriting in the
company voice; 12 files are untracked, so copy them into the lane's store first.

## Open
- Feed: standalone vs inside fringe (his call).
- Which company accounts (Bluesky/Mastodon fit the drafts' lengths; X needs ≤280).
- Footer link `recursive.sloptaumatons.com` needs a DNS subdomain (or use the apex).
- Site's project list predates the archive and the revival — refresh when next touched.
- vibepost left the agents flake when archived; re-add only if its shell needs pinning.

## Siblings (one task, branch per repo)
- this repo: `revival`
- agents monorepo: `sloptaumatons-revival` — kanban card `sloptaumatons.com`
- vibepost: `sloptaumatons-revival` — the draft inventory
Related earlier sketch: `projects/sloptaumaton-learning-study-engine/`.
