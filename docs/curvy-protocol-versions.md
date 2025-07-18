# Curvy Protocol Versions

We are gradually upgrading the Curvy protocol to support more complex, scalable, and compliant privacy features. Below is a high-level breakdown:

## Curvy v1 – Stealth Transfers (Live)

The current version of Curvy supports one-time stealth address generation, stateless detection using view tags, and private 1:1 transfers across [multiple blockchains](./wallets-and-networks.html#supported-networks). It uses dual key pairs (view and spend) for self-custody and offers optional auditability via view key sharing.

## Curvy v2 – CSUC & Curvy Aggregator (Coming Soon)

The second version of Curvy introduces two new, inter-connected components:

-   **Curvy Single User Contract (CSUC)**: which enables Users to execute a set of Actions (i.e. `TRANSFER`, `SWAP`, `BRIDGE`, ...) using the Curvy Protocol without the need for them to have Native tokens. Inside CSUC, any [ERC20-compliant](https://eips.ethereum.org/EIPS/eip-20) token can be used. The CSUC Action Set can always be expanded, allowing for greater flexibility, and added functionality.
    -   _[Development Status] Contract's code has been finalized, benchmarked, and currently is being integrated._
-   **Curvy Aggregator**: which allows Users to combine, and split their balances held across multiple CSAs without linking those addresses together. This component heavily utilizes Zero-Knowledge (ZK) proofs generated by Curvy's custom circuits.
    -   _[Development Status] Code is being finalized, and the chain/circuit-specific meta parameters are being computed._

In both components, Users maintain full privacy and control while continuously gaining access to more advanced features.

Bring these components live **will enable great UX for Curvy Users**, as they will not need to worry about where their funds are located (on CSUC or Curvy Aggregator), since switching (moving) funds between those two will **be made seamless**.

All of this **sets the stage for Cross-Chain transfers**, allowing Users to anonymously move their funds between different blockchains without any friction.

## Curvy v3 – MPC & Shared Accounts (Planned)

The third version brings threshold signature schemes and MPC-based shared wallets to Curvy. Users will be able to co-manage stealth addresses using m-of-n signature approval, powered by Pedersen’s DKG protocol and the GG20 threshold ECDSA scheme.

This setup allows teams, DAOs, and custodians to privately manage funds together, without any single party holding the full key.
