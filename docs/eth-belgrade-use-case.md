# ETH Belgrade Partnership 

## Use Case: Private & Trustless RSVP System for Events

ETH Belgrade, one of the leading events in the region, needed a simple and secure way to ensure commitment from participants who registered for their hackathon, including those flying in from ETHGlobal Prague.
(*Yes, you read that right: they even rented a plane to fly participants from Prague to Belgrade*).

To prevent people from reserving a plane seat and a hackathon spot without actually showing up, ETH Belgrade asked each participant to temporarily deposit a small amount of ETH as a commitment guarantee. If a participant showed up, their ETH would be refunded after the event. But if they didn’t attend and failed to cancel before the deadline, their funds would be retained.

### The Challenge

If ETH Belgrade had simply asked participants to send ETH to a public wallet address, it would have created a verification problem.
Since all Ethereum transactions are publicly visible, a dishonest participant could visit a block explorer, copy someone else’s transaction hash, and falsely claim that they already paid by submitting the link to that transaction.

This would force organisers to manually verify claims by comparing sender addresses, checking timestamps, and resolving disputes, wasting a lot of their time and introducing unnecessary friction.

### The Solutions

Curvy enabled private and verifiable RSVP deposits:

- Participants sent ETH to ETH Belgrade’s Curvy ID using the Curvy Wallet.
- Each transaction was automatically routed through a unique stealth address, making it private and unlinkable.
- Participants included a private encrypted message (e.g. their name or ticket ID), visible only to ETH Belgrade organisers in their Curvy Wallet.

This solution brought several important advantages:
- Prevents fraudulent claims: no one can fake a deposit by copying someone else’s transaction.
- Gives organisers full visibility into who deposited funds, without exposing participant data on-chain.
- Makes it simple and secure to refund participants after the event.

This is a reusable pattern for event deposits, ticket reservations, DAO bounties, or any flow where privacy, simplicity, and automation matter.
