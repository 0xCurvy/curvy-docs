# Curvy Protocol Versions

We are gradually upgrading the Curvy protocol to support more complex, scalable, and compliant privacy features. Below is a high-level breakdown:

## Curvy v1 – Stealth Transfers (Live)

The current version of Curvy supports one-time stealth address generation, stateless detection using view tags, and private 1:1 transfers across [multiple blockchains](./wallets-and-networks.html#supported-networks). It uses dual key pairs (view and spend) for self-custody and offers optional auditability via view key sharing.

## Curvy v2 – Relayer & Aggregation (Coming Soon)

The second version introduces a proxy contract architecture and relayer coordination. Users will be able to aggregate and split funds, swap and bridge tokens, and interact with dApps privately.

Transfers are represented as encrypted notes. These notes are processed and validated by a relayer who handles batching, ZK proof generation, and private gas abstraction. Users maintain full privacy and control while gaining access to more advanced features.

## Curvy v3 – MPC & Shared Accounts (Planned)

The third version brings threshold signature schemes and MPC-based shared wallets to Curvy. Users will be able to co-manage stealth addresses using m-of-n signature approval, powered by Pedersen’s DKG protocol and the GG20 threshold ECDSA scheme.

This setup allows teams, DAOs, and custodians to privately manage funds together, without any single party holding the full key.
