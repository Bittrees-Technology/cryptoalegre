# Cryptoalegre Membership System Plan

Status: Draft for constitutional and security review  
Primary language: Portuguese  
Network: Ethereum Mainnet  
Association: Associação Cultural e Educativa Cryptolegre  
Short name: Cryptoalegre

## 1. Purpose

Create a constitution-bound membership system in which each approved person receives one non-transferable credential, holds exactly one vote, and accesses the member portal through their verified membership state.

The smart contracts enforce objective rules such as permissions, state transitions, voting weight, thresholds, and delays. They do not determine whether evidence or allegations are factually true; notice, review, conflicts, defense, and appeal remain constitutional governance processes.

## 2. Confirmed decisions

- Membership credentials are issued on Ethereum Mainnet.
- Membership has no purchase price. The member pays only the necessary transaction gas when applicable.
- The Association Safe issues a credential only after the constitutional approval process is complete.
- The initial three credentials belong to the three founding members who are currently Safe signers.
- The Safe remains 1-of-3 during the tightly bounded founding bootstrap.
- After all three founder credentials are issued and verified, the constitution is ratified and the Safe changes to 2-of-3.
- Ordinary membership issuance and disciplinary controls remain locked until ratification.
- Each approved person may have one active credential and exactly one vote.
- The credential is non-transferable. Wallet recovery uses an approved credential-migration process rather than a transfer or new membership.

## 3. Current authority

Association Safe: `0x8C47d399FD7F9Fad35D91c6fC58bCE651d8DA72F`

Founding signer wallets:

1. `0x4dCad0b4f5B97AD84D9904f265330ebb6935aBC7`
2. `0x01193A5140990F8D169E3292bAd7FEE7be810C7d`
3. `0xc1765d7Dfd8897CdFa46F51fAC19b3576711f777`

## 4. Membership architecture

### 4.1 Registry as the source of truth

Portal access, ENS resolution, and voting power must query the membership registry. Token ownership alone is not proof of active membership.

Minimum membership record:

- Stable member ID.
- Current wallet.
- Credential token ID.
- Membership status.
- Admission timestamp.
- Last status-change timestamp.
- Optional suspension expiry.
- Primary Permanent Group.
- Admission record hash.
- Status-decision or reason hash.
- Reserved ENS member label.

Personally sensitive evidence must not be stored directly onchain. Store a hash or content identifier and keep the protected source material under the Association's access policy.

### 4.2 Credential

- ERC-721-compatible non-transferable membership credential.
- ERC-5192 compatibility for standard soulbound detection.
- One credential per approved membership record.
- Transfers and approvals are disabled.
- Metadata reflects the credential's current status without exposing private evidence.
- Burning or visually invalidating a revoked credential is an implementation choice; the registry and event history remain permanent.

### 4.3 Membership states

| State | Credential rights | Portal and ENS | Governance | Reversible |
| --- | --- | --- | --- | --- |
| None | None | No access | No vote | N/A |
| Active | Valid | Enabled | One vote | N/A |
| Suspended | Temporarily inactive | Disabled or read-only; ENS label reserved | No new proposals or votes | Yes |
| Revoked | Permanently invalid | Disabled; ENS label tombstoned | No vote | Only by constitutional readmission |
| Resigned | Voluntarily inactive | Disabled; ENS label reserved | No vote | New constitutional application |

Allowed transitions:

- `None -> Active`: approved admission and issuance.
- `Active -> Suspended`: bounded emergency or constitutional suspension.
- `Suspended -> Active`: expiry or approved reinstatement.
- `Active/Suspended -> Revoked`: successful constitutional revocation process.
- `Active/Suspended -> Resigned`: authenticated voluntary resignation.
- `Active -> Active`: approved wallet recovery preserving the same member ID.

Revoked member IDs and ENS labels are not recycled.

## 5. Authority and controls

Recommended least-privilege roles:

- `ISSUER_ROLE`: executes approved admissions.
- `SUSPENDER_ROLE`: may impose a constitutionally bounded temporary suspension only.
- `REVOKER_ROLE`: governance/timelock only.
- `RECOVERY_ROLE`: executes approved wallet recovery.
- `PAUSER_ROLE`: stops sensitive operations during a technical incident without changing member status.

Recommended authority after ratification:

| Action | Decision authority | Executor |
| --- | --- | --- |
| Issue an approved membership | Constitutional admission process | 2-of-3 Safe or timelock |
| Emergency suspension | 2-of-3 Safe, limited by contract duration | Safe |
| Extend a suspension | Member governance under constitutional threshold | Timelock |
| Permanent revocation | Member governance under constitutional threshold | Timelock |
| Reinstatement | Constitutional review or appeal process | Timelock/Safe as defined |
| Wallet recovery | Constitutional recovery approval | Safe or timelock |
| Contract upgrade | Constitutional governance plus delay | Timelock |

No single signer should be able to revoke membership, alter voting weight, or change the registry implementation.

## 6. Suspension and revocation

### 6.1 Suspension

- Temporary and reversible.
- Emits the affected member ID, start time, end time, decision reference, and public reason hash.
- Immediately blocks new proposals and new votes.
- Does not erase a vote validly cast before suspension.
- Reserves the member's ENS label.
- Provides notice, an opportunity to respond, and a defined appeal route.
- Cannot exceed the constitutional maximum without a new governance decision.

### 6.2 Revocation

- Requires a formal proposal, conflict handling, the constitutional voting threshold, and a delayed execution.
- The affected member does not vote on their own revocation.
- Stops future voting power, portal access, delegation, and ENS resolution.
- Preserves the admission, decision, and event history.
- Does not automatically permit the same person to apply as a new member.

## 7. One member, one vote

- Each Active membership has voting weight exactly `1`.
- Suspended, Revoked, and Resigned memberships have voting weight `0`.
- Eligibility is checked at the proposal snapshot and again when a vote is cast.
- A vote validly cast before a later suspension remains counted.
- Delegated voting power becomes inactive while the underlying member is suspended or revoked.
- Suspension reinstatement may restore an existing delegation; revocation clears it permanently.
- Wallet uniqueness alone does not prove person uniqueness. The admission process must check for duplicate people before issuance.

## 8. ENS member names

Target format: `<name>.member.cryptoalegre.eth`

Recommended model:

- The membership registry remains the source of truth.
- A dedicated resolver adapter maps an approved member label to the member's current wallet.
- Active membership resolves normally.
- Suspended membership stops resolving while reserving the label.
- Revoked or Resigned membership stops resolving and tombstones the label.
- Wallet recovery updates the same member label to the replacement wallet.
- The name is not issued as a separately transferable ENS NFT.
- ENS-specific logic is isolated behind an adapter so the registry can later integrate with ENSv2 without migrating membership records.

## 9. Founder bootstrap

1. Deploy and verify the contracts on Ethereum Mainnet.
2. Configure the Safe as the bounded bootstrap authority.
3. Issue exactly three founder credentials to the three signer wallets.
4. Verify credential ownership, member IDs, voting weight, and ENS-label reservations.
5. Ratify the constitution.
6. Change the Safe threshold from 1-of-3 to 2-of-3.
7. Transfer permanent administrative authority to the ratified role/timelock configuration.
8. Unlock ordinary admissions and membership controls.
9. Publish contract addresses, verified source, deployment records, and authority assignments.

The bootstrap should be atomic where practical and remain open for the shortest possible period.

## 10. Security and audit requirements

- Independent smart-contract review before Mainnet deployment.
- Unit tests for every state transition and forbidden transition.
- Stateful fuzz tests for one-person-one-vote invariants, role boundaries, and recovery.
- Mainnet-fork tests covering the Safe and execution path.
- Deployment simulation and transaction review before each Mainnet action.
- Verified source code and immutable deployment manifest.
- Events for issuance, suspension, reinstatement, revocation, resignation, recovery, role changes, and upgrades.
- No sensitive personal evidence or unencrypted personal data onchain.
- Emergency pause must not let the pauser rewrite membership or votes.
- An upgrade cannot bypass the constitutional authority and delay requirements.

## 11. Acceptance criteria

- Three founder credentials are correctly held before ratification.
- The Safe is demonstrably 2-of-3 after ratification.
- One Active member always equals one vote.
- A wallet cannot transfer or sell the credential.
- The portal, forum, voting system, and ENS resolver all use the same membership status.
- Suspension is bounded and reversible.
- Revocation cannot be performed by a single Safe signer or ordinary moderator.
- Wallet recovery preserves member identity, history, voting uniqueness, and ENS label.
- All privileged actions are attributable through onchain events.

## 12. Constitutional decisions still requiring ratification

- Maximum emergency-suspension duration.
- Suspension, extension, reinstatement, and revocation thresholds.
- Whether a suspended member has read-only portal/forum access.
- The affected member's participation rights during a disciplinary process.
- Readmission rules after revocation or resignation.
- Appeal deadlines and decision authority.
- Approved wallet-recovery evidence and waiting period.
- Upgrade authority and minimum timelock duration.

