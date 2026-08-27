# Cryptoalegre Constitutional Enforcement Plan

Status: Draft for constitutional, legal, and smart-contract review  
Initial implementation focus: Treasury spending proposals  
Later proposal types: Policies and initiatives  
Network target: Ethereum Mainnet after testnet validation

## 1. Purpose

Translate the Cryptoalegre Constitution into a system that makes governance decisions verifiable and, where appropriate, automatically executable without pretending that software can interpret every constitutional judgment.

The first complete vertical slice should be a treasury spending proposal because it has an objective execution result: transfer an exact asset and amount from a controlled treasury to an exact recipient after a valid proposal, vote, and delay.

## 2. Authority hierarchy

The system must respect this order of authority:

1. Applicable Portuguese law.
2. The Association's registered constitutive act and statutes.
3. The ratified Cryptoalegre Constitution.
4. Ratified internal policies and group rules.
5. Onchain governance and execution contracts.
6. The website, member portal, forum, indexers, and other interfaces.

If a lower layer conflicts with a higher layer, automatic execution pauses and the matter returns to the legally competent human body. A smart-contract transaction does not cure an invalid notice, conflict of interest, lack of legal competence, or other defect in the underlying Association decision.

## 3. What can and cannot be enforced

### 3.1 Directly machine-enforceable

- Active membership at a defined snapshot.
- One member, one vote.
- Proposal type and required structured fields.
- Eligible proposing body or member.
- Voting delay and voting period.
- Participation quorum.
- Approval threshold.
- Conflict-based voting exclusion after a conflict record is established.
- Exact target, token, recipient, amount, calldata, and content hash.
- Execution timelock.
- Per-proposal and per-period spending caps.
- Proposal expiry and prevention of replay/double execution.
- Permanent event and decision records.

### 3.2 Process-enforceable with human inputs

- Notice and agenda delivery.
- Group, Council, or association-wide competence.
- Conflict declarations and challenges.
- Publication of supporting documents and minutes.
- Confirmation that a qualitative review occurred.
- Selection of the correct proposal classification where the Constitution uses subjective terms.

The contract can require a signed or hashed record for each step, but a human process determines whether the record is substantively truthful.

### 3.3 Not determinable by code alone

- Whether a contribution is culturally or educationally valuable.
- Whether an initiative serves the Association's mission.
- Whether allegations or evidence are true.
- Whether a proposed policy contradicts the spirit of the Constitution.
- Whether a legal meeting, representation, notice, or vote is valid under Portuguese law in a disputed case.

## 4. Constitutional baseline

The current draft Constitution provides:

- Equal voting rights for all members and optional delegation (§2.2 and §4.1).
- Routine Council matters decided by majority of valid votes with Council quorum (§4.2).
- Default quorum of at least 50% of the eligible voters in the relevant body (§4.3.2).
- Association-wide quorum of at least 50% of all registered members for Major Decisions and constitutional amendments (§4.3.3).
- Ordinary decisions require more than 50% of valid votes with quorum (§4.4.1).
- Major initiatives and policy changes require at least 2/3 of valid votes with quorum (§4.4.2).
- Constitutional amendments require at least 3/4 of valid votes in an association-wide vote (§4.4.3 and §6).
- Minor rules or detailed policies that do not alter the fundamental governance structure, mission, or purpose may be approved by simple Council majority with quorum (§6).

The Constitution does not yet define how treasury spending is classified. That gap must be resolved before automatic execution.

## 5. Required legal alignment

This plan is not a substitute for Portuguese legal review. Before Mainnet execution, counsel should verify that the registered statutes delegate each proposed decision to the correct Association body and that digital voting, representation, notice, presence, minutes, and execution satisfy applicable law.

Issues requiring particular review include:

- The Portuguese Civil Code reserves certain matters to the General Assembly.
- The first-convocation quorum is at least half of the associates.
- Ordinary General Assembly decisions generally require an absolute majority of the associates present.
- Statutory amendments require three quarters of the associates present.
- An associate may not vote in a matter involving a conflict between the Association and that associate, their spouse, ancestors, or descendants.
- Meeting notice, timing, agenda, presence, and minutes may affect validity.
- Current Portuguese case law should be reviewed before treating asynchronous onchain voting or delegation as a legally sufficient General Assembly procedure.

For legally reserved decisions, the onchain result may need to operate as an instruction or evidentiary record followed by a compliant General Assembly resolution and minutes rather than as the sole juridical act.

## 6. Proposal classes

### 6.1 Treasury Spending Proposal — first implementation

Purpose: authorize one exact transfer of ETH or an approved ERC-20 token.

Required fields:

- Proposal type and version.
- Proposing member/body and sponsoring Group.
- Recipient address and, when relevant, recipient member ID.
- Asset address or native ETH marker.
- Exact amount.
- Purpose statement and content-addressed supporting-document hash.
- Budget category and budget-period ID.
- Ordinary or Major classification plus classification evidence.
- Conflict declarations.
- Earliest execution time and expiry.
- Optional linked initiative ID.

Version 1 should permit only native ETH and standard ERC-20 transfers. It should prohibit arbitrary calls, `delegatecall`, approvals with open-ended allowances, protocol deposits, swaps, bridges, and upgrade calls.

### 6.2 Policy Proposal

Purpose: adopt, replace, or retire a versioned internal policy.

The proposal stores:

- Policy identifier and version.
- Hash and durable location of the complete policy text.
- Classification: minor/internal or Major policy change.
- Effective date.
- Superseded policy version.
- Responsible body.

Approval records the policy in a Policy Registry. Prose is not automatically enforceable. Any rule intended to constrain contracts must also be represented by separately reviewed machine-readable parameters or modules.

### 6.3 Initiative Proposal

Purpose: approve a significant program or project before work or funding begins.

The proposal stores:

- Initiative identifier and title.
- Responsible Permanent Group(s).
- Steward member and operational wallet.
- Mission/purpose document hash.
- Start, review, and expiry dates.
- Requested budget cap and asset.
- Milestones and reporting schedule.
- Conflict declarations.
- Major/ordinary classification evidence.

Initiative approval should not create an unlimited spending authority. Funding uses separate treasury proposals or a narrowly capped milestone escrow approved in the initiative proposal.

## 7. Objective proposal classification

A proposer must not be able to select an easier voting threshold merely by labeling a request "ordinary."

Before deployment, a Treasury and Proposal Classification Policy should define objective criteria.

Recommended model:

### Ordinary proposal

All of the following must be true:

- Within a previously approved budget.
- At or below a ratified per-transaction cap.
- At or below the Group's remaining period allowance.
- Single non-recurring transfer.
- Within the proposing body's delegated purpose.
- Not paid to a conflicted decision-maker or related person unless a separate conflict process authorizes it.
- Does not create a new policy, initiative, liability, or continuing obligation.

### Major proposal

Any of the following makes the proposal Major:

- Above the ordinary transaction or period cap.
- Outside an approved budget.
- Uses protected reserves.
- Creates recurring, streaming, or milestone obligations.
- Starts or materially changes a significant initiative.
- Changes a policy beyond the constitutionally defined minor/internal scope.
- Affects more than one Permanent Group or the Association as a whole.
- Pays a decision-maker, founder, councillor, chair, related party, or their controlled entity.
- Creates debt, guarantees, token exposure, swaps, bridging, protocol deposits, or other material risk.

Numeric caps, budget periods, reserve definitions, and related-party rules remain unset until ratified.

## 8. Recommended contract architecture

```text
Membership Registry
        │
        ▼
Constitutional Governor ───► Timelock
        │                       │
        │                       ├──► Treasury Vault
        │                       ├──► Policy Registry
        │                       └──► Initiative Registry
        │
        └── proposal/vote events ──► Portal + audit index

Association Safe (2-of-3 after ratification)
        └── bounded bootstrap, emergency pause, and approved recovery roles
```

### Membership Registry

- Supplies Active member status and one-vote checkpoints.
- Excludes Suspended, Revoked, and Resigned membership as constitutionally defined.
- Supports wallet recovery without duplicating voting power.

### Constitutional Governor

- Validates proposal type and proposer eligibility.
- Selects quorum and success threshold from the approved proposal classification.
- Uses timestamp-based voting periods for human-readable deadlines.
- Records votes and queues successful proposals.

### Timelock

- Receives successful proposals from the Governor.
- Enforces the minimum review delay.
- Makes the pending exact operation inspectable before execution.
- Should ultimately be self-administered or controlled only through the ratified governance path.

### Treasury Vault

- Holds only the assets placed under constitutional governance.
- Version 1 exposes exact native-asset and ERC-20 transfer functions.
- Accepts commands only from the Timelock.
- Enforces caps, expiry, asset allowlists, and double-spend protection again at execution.

### Policy and Initiative Registries

- Store identifiers, hashes, versions, status, dates, and decision references.
- Do not attempt to interpret prose.
- Expose stable public records to the portal and audit tools.

### Association Safe

- Remains the founding bootstrap and operational security account.
- After the three founder credentials and constitutional ratification, changes to 2-of-3.
- Should not be able to bypass governed spending from the Treasury Vault.
- May initially hold a narrowly scoped emergency pause or recovery role, but cannot redirect funds while paused.

Keeping governed funds in a dedicated Treasury Vault is safer and easier to reason about than placing a custom Guard on every Safe transaction. A Safe Guard can block the account entirely if incorrectly designed.

## 9. Proposal lifecycle

```text
Forum draft
  → structured proposal
  → classification and conflict review
  → immutable agenda/notice
  → voting delay
  → membership snapshot
  → active vote
  → defeated OR queued
  → timelock review period
  → executed OR cancelled/expired
  → permanent decision and execution record
```

Recommended states:

- Draft: editable, offchain, not a decision.
- Submitted: immutable proposal content and classification.
- Review: notice and voting delay.
- Active: votes may be cast.
- Defeated: quorum or threshold not reached.
- Succeeded: vote passed but is not executable yet.
- Queued: exact operation is in the Timelock.
- Executed: operation completed once.
- Cancelled: cancelled through a constitutionally authorized path.
- Expired: successful proposal was not executed before its deadline.

## 10. Voting mathematics to ratify

The implementation should use integer-safe rounding and publish the formula in the UI.

Recommended interpretation:

- Participation quorum: `ceil(eligible voters × 50%)`.
- Abstentions count toward participation quorum but not toward valid Yes/No votes.
- Ordinary approval: `Yes > No` after quorum, equivalent to more than 50% of valid Yes/No votes.
- Major approval: `Yes >= ceil(valid Yes/No votes × 2/3)` after association-wide quorum.
- Amendment approval: `Yes >= ceil(valid Yes/No votes × 3/4)` after association-wide quorum and the required discussion period.
- A conflicted voter cannot vote directly or through delegation on the affected proposal.
- The legal effect of excluding conflicted voters from the quorum denominator requires Portuguese legal confirmation.

With three eligible members, a Major proposal requires two Yes votes if all three vote. If only two members participate and quorum is otherwise valid, both must vote Yes.

## 11. Conflict-of-interest handling

Every proposal must include conflict declarations before voting begins.

Minimum workflow:

1. Proposer identifies recipients, beneficial owners, and related members.
2. Members declare their own conflicts.
3. A challenge window permits another member to allege an undisclosed conflict with an evidence hash.
4. The constitutionally competent body determines the conflict record.
5. The Governor prevents the recorded conflicted member and their delegate from voting on that proposal.
6. The proposal and final minutes list exclusions and their effect on quorum/threshold calculations.

The contract cannot discover spouses, ancestors, descendants, beneficial ownership, or private relationships without a human/legal input.

## 12. Execution controls for treasury version 1

- Exact recipient, asset, and amount are committed before voting.
- No recipient or amount edits after submission.
- One proposal executes at most once.
- No `delegatecall` or arbitrary-call function.
- No unlimited ERC-20 approvals.
- Unsupported or fee-on-transfer assets are rejected unless explicitly reviewed.
- Period cap and budget balance are rechecked at execution.
- Expired proposals cannot execute.
- Emergency pause stops execution but cannot change the recipient or withdraw to the pauser.
- Failed transfers do not mark the proposal executed.
- Every successful transfer emits the proposal ID, asset, recipient, amount, and purpose hash.

## 13. Recommended starting policy

Before deploying contracts, ratify a Treasury Spending Policy that answers:

- Which assets may the treasury hold and spend?
- What is the ordinary per-transaction cap?
- What is each Group's period allowance?
- What is a protected reserve?
- Who may submit and sponsor a proposal?
- Which body votes on ordinary Group spending?
- Which spending is necessarily association-wide and Major?
- How long are notice, voting, timelock, and expiry periods?
- How are abstentions treated?
- How are conflicts decided, and how do they affect the denominator?
- What supporting documents and receipts are mandatory?
- Can a passed proposal be cancelled, and by whom?
- What reporting is required after payment?

## 14. Delivery sequence

### Phase 1: Constitutional and legal normalization

- Compare the draft Constitution with the registered statutes.
- Identify the legally competent body for each proposal class.
- Ratify the Treasury Spending and Proposal Classification Policy.
- Ratify conflict, notice, voting-period, timelock, cancellation, and reporting rules.

### Phase 2: Contract specification and tests

- Specify Membership Registry voting checkpoints.
- Specify Treasury Governor, Timelock, and restricted Treasury Vault.
- Write invariants for classification, quorum, voting, caps, conflicts, and one-time execution.
- Test ordinary and Major proposals with three founding members.

### Phase 3: Testnet pilot

- Deploy to an Ethereum testnet.
- Issue three test founder credentials.
- Run one ordinary transfer, one Major transfer, one defeated proposal, one conflict exclusion, one cancellation, and one expiry.
- Compare the portal record, onchain record, Safe actions, notices, and minutes.

### Phase 4: Mainnet readiness

- Independent contract and legal review.
- Publish verified source and deployment manifest.
- Ratify production addresses and parameters.
- Change the Safe to 2-of-3 after the founding credential sequence.
- Fund the Treasury Vault with a deliberately small pilot amount.

### Phase 5: Extend proposal types

- Add the Policy Registry.
- Add the Initiative Registry.
- Add milestone funding only after the one-transfer treasury path is proven.
- Add broader execution capabilities only through a separately audited constitutional proposal.

## 15. Initial acceptance criteria

- A proposal cannot choose a lower threshold than its ratified classification allows.
- The correct eligible-member snapshot and quorum are publicly reproducible.
- Exactly one vote is available per Active member.
- A recorded conflicted member and their delegate cannot vote on the proposal.
- A passed proposal queues the exact payload shown before voting.
- The Treasury Vault cannot execute the payment before the timelock.
- Neither a single signer nor the 2-of-3 Safe can bypass the governed Treasury Vault transfer path.
- Emergency pause cannot redirect funds.
- Failed, cancelled, defeated, and expired proposals cannot spend.
- Executed proposals produce matching onchain events, portal records, and Association records/minutes.

## 16. Sources for review

- Cryptoalegre draft Constitution: https://cryptoalegre.eth.limo/constituicao/
- Portuguese Civil Code, associations: https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1966-34509075-49770875
- OpenZeppelin Governor and Timelock: https://docs.openzeppelin.com/contracts/5.x/governance
- Safe Guards: https://docs.safe.global/advanced/smart-account-guards

