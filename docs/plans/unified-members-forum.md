# Cryptoalegre Unified Members Forum Plan

Status: Draft for constitutional, privacy, and product review  
Primary language: Portuguese  
Secondary interface language: English  
Access: Cryptoalegre members portal

## 1. Purpose

Provide one private forum in which members can collaborate across Culture, Education, Technology, Governance, and the Assembly without dividing the community by interface language.

The forum supports deliberation and proposal preparation. A forum post, reaction, poll, or informal consensus is never a binding Association decision. Binding decisions move through the constitutional governance and voting system.

## 2. Confirmed decisions

- There is one forum, not a Portuguese forum and a separate English forum.
- Portuguese is the lead interface and default display language.
- The Portuguese and English routes read from the same forum records.
- Each topic and reply is stored once with its original language and original text preserved.
- Automatic translations are alternate views of the same post, not duplicated posts.
- Replies in Portuguese and English remain in the same thread and chronological history.
- Members may always view the original wording.
- The source language and translation status are visibly identified.
- The same membership registry controls portal, forum, governance, and ENS access.

## 3. Forum areas

| Area | Purpose |
| --- | --- |
| Culture | Community, events, territory, arts, inclusion, and cultural direction |
| Education | Workshops, documentation, programs, and knowledge-sharing |
| Technology | Tools, infrastructure, smart contracts, and decentralized experiments |
| Governance | Deliberation and refinement before a formal proposal |
| Assembly | Announcements, calendar, member-wide questions, and common matters |

These areas are constitutional or organizational categories, not language categories.

## 4. Unified multilingual model

### 4.1 Canonical post

Every post has one canonical record containing:

- Post ID and thread ID.
- Author member ID.
- Forum area.
- Original title or body.
- Source-language tag.
- Creation and edit timestamps.
- Current moderation state.
- Edit-history reference.

### 4.2 Translated views

- Translation is generated on first request or shortly after posting and cached.
- A translation references the canonical post ID and target language.
- It never creates a second topic, reply, reaction count, or moderation history.
- UI labels include "Translated from Portuguese" or "Translated from English."
- "Show original" is always available.
- Author-approved or moderator-approved corrections may replace a machine translation while preserving its history.
- ENS names, wallet addresses, links, code blocks, quoted contract text, and other protected spans are not translated.
- Constitutional quotations should link to the authoritative language version and visibly identify that source.

### 4.3 Interface routes

- `/membros/forum`: Portuguese interface displaying the unified forum.
- `/en/members/forum`: English interface displaying the same forum.
- Switching interface language preserves the current area, thread, and post anchor.
- URLs use one stable thread identifier so links do not fork by language.

## 5. Authentication and authorization

### 5.1 Sign-in

- Connect the member wallet.
- Request a Sign-In with Ethereum signature containing domain, nonce, chain ID, issue time, and expiry.
- Verify the signature on the server.
- Query the membership registry for the current membership state.
- Create a secure, short-lived server session.
- Recheck membership status for every protected read or write operation.

A client-side token-balance check is only a convenience signal and is not sufficient to protect forum data or mutations.

### 5.2 Status-based access

| Membership status | Read | Post/reply | React | Moderate |
| --- | --- | --- | --- | --- |
| Active | Yes | Yes | Yes | If separately authorized |
| Suspended | Constitutional decision: none or read-only | No | No | No |
| Revoked | No | No | No | No |
| Resigned | No | No | No | No |

Every server action and data query enforces these rules close to the data source.

## 6. Suggested data model

### `forum_areas`

- Stable key.
- Portuguese and English display names/descriptions.
- Constitutional section reference where applicable.
- Ordering and active status.

### `threads`

- Thread ID.
- Area key.
- Author member ID.
- Original title and source language.
- State: open, locked, archived, or moderated.
- Created/updated timestamps.
- Optional linked governance proposal ID.

### `posts`

- Post ID and thread ID.
- Author member ID.
- Original body and source language.
- Created/updated timestamps.
- Reply-parent ID when applicable.
- Moderation state.

### `translations`

- Canonical object type and ID.
- Source and target languages.
- Translated text.
- Translation provider/model version.
- State: machine, author-corrected, moderator-corrected, or stale.
- Created/updated timestamps.

### `reactions`

- Canonical post ID.
- Member ID.
- Reaction type.
- One reaction record per allowed member/type pair.

### `moderation_events`

- Event ID.
- Canonical object ID.
- Acting member/moderator ID.
- Action type.
- Public reason and protected evidence reference where necessary.
- Creation timestamp.
- Appeal status and linked decision.

## 7. Moderation and constitutional safeguards

- Forum moderation is separate from membership suspension and revocation.
- A moderator may hide, label, move, lock, or restore content only within defined policy.
- A content violation does not automatically change membership state.
- Membership suspension or revocation follows the separate constitutional process.
- Deleted or hidden content retains a protected audit record.
- The affected member receives notice and a reason.
- Appeal actions and outcomes are recorded.
- Moderators cannot edit the canonical meaning of another member's post.
- Translation correction cannot be used to rewrite the original.

## 8. Governance boundary

Recommended flow:

1. Discuss an idea in the relevant forum area.
2. Document alternatives, impacts, objections, and conflicts.
3. Convert the discussion into a formal governance proposal.
4. Link the proposal and forum thread in both directions.
5. Take the constitutional snapshot and open voting.
6. Execute only if quorum and threshold requirements pass.
7. Publish the outcome back to the thread.

Forum reactions, informal polls, moderator actions, and translation views never change voting weight or execute Association actions.

## 9. Privacy and security

- Forum content is private to authorized members unless governance explicitly makes an area public.
- Search engines and social previews must not expose protected topics or posts.
- Do not place private forum content in static HTML, client bundles, logs, analytics payloads, or translation URLs.
- Translation processing must use an approved provider and data-processing policy.
- Store the minimum member profile necessary for display and moderation.
- Display the approved member name/ENS label rather than requiring a public legal name.
- Apply rate limits, request-size limits, spam controls, and content sanitization.
- Prevent script injection, unsafe embeds, malicious links, and wallet-signature replay.
- Maintain backups, retention rules, and a tested recovery process.

## 10. Delivery phases

### Phase 1: Constitutional and product review

- Ratify membership-status access rules.
- Ratify moderation, notice, conflict, and appeal rules.
- Approve the unified multilingual model and translation disclosures.
- Decide forum privacy and retention policies.

### Phase 2: Identity and shared storage

- Deploy the membership registry.
- Implement Sign-In with Ethereum and secure server sessions.
- Create the shared forum database and authorization layer.
- Verify that Portuguese and English routes use the same records.

### Phase 3: Core forum

- Areas, threads, replies, edit history, reactions, search, and notifications.
- Status-based access and moderation tools.
- Links from forum discussions to governance proposals.

### Phase 4: Translation

- Source-language detection and explicit author selection.
- Cached Portuguese-English translation.
- Original/translated toggle and translation disclosures.
- Protected spans and correction history.
- Mixed-language search indexing.

### Phase 5: Audit and launch

- Authorization and privacy review.
- Abuse-case and wallet-session testing.
- Translation quality review using constitutional and technical examples.
- Backup/restore exercise.
- Founding-member pilot before opening ordinary membership access.

## 11. Acceptance criteria

- A topic created in Portuguese appears in the English interface as the same topic ID and translated view.
- Switching languages preserves the thread, replies, reactions, and post anchor.
- A reply written in English appears in the same Portuguese-view conversation with a translated view.
- Original text is always available and never overwritten by translation.
- Translation corrections have an audit history.
- Active members can participate according to their permissions.
- Suspended, Revoked, and Resigned members cannot bypass status restrictions through another route or API.
- Private forum content is not exposed in unauthenticated page output, indexing, logs, or previews.
- Forum activity cannot directly create or execute a binding governance decision.

## 12. Decisions still requiring approval

- Whether Suspended members have read-only access or no access.
- Translation provider and data-processing terms.
- Whether translations are automatic by default or user-triggered.
- Who may correct a translation and how corrections are approved.
- Edit window and permanent edit-history rules.
- Content retention after resignation or revocation.
- Whether any Assembly announcements become publicly readable.
- Moderator appointment, scope, term, removal, and conflict rules.
- Appeal deadlines and appeal decision authority.
- Notification channels and member opt-out controls.

