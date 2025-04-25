# Research & Protocol Versions

Curvy is based on real cryptographic research. The ideas behind how it works come from academic papers that help us build a system that’s not only private, but also reliable, secure, and ready for the future.
All of these papers were created by the Curvy team, in collaboration with our colleagues at 3327.

## Research Papers

The first version of Curvy is based on the research paper ["Elliptic Curve Pairing Stealth Address Protocols"](https://arxiv.org/abs/2312.12131). This paper introduced a way to generate one-time-use stealth addresses that can be detected and spent from using view and spend keys. It’s what allows Curvy users to receive funds without revealing a public address, and what makes every transaction unlinkable by default.

We’re also exploring post-quantum security. The paper ["Post-Quantum Secure Stealth Address Protocols"](https://eprint.iacr.org/2025/112.pdf) proposes a quantum-resistant version of Curvy that uses different cryptographic primitives (such as pairing-friendly and lattice-based constructions) to ensure the protocol remains secure in the long term. While this isn’t implemented yet, it’s already shaping how we think about long-term resilience.

Lastly, we’re researching how to make Curvy wallets work for teams and organisations. Our upcoming multisig version is based on distributed cryptography research, particularly protocols like Pedersen’s Distributed Key Generation (DKG) and GG20 (Threshold ECDSA).

## Curvy Protocol Versions

We are progressively evolving the Curvy protocol to support more complex, scalable, and compliant privacy features. Below is a high-level breakdown:

### Curvy v1 – Stealth Transfers (Live)

The current version of Curvy supports one-time stealth address generation, stateless detection using view tags, and private 1:1 transfers on Ethereum and Starknet. It uses dual key pairs (view and spend) for self-custody and offers optional auditability via view key sharing.

### Curvy v2 – Relayer & Aggregation (Coming Soon)

The second version introduces a proxy contract architecture and relayer coordination. Users will be able to aggregate and split funds, swap and bridge tokens, and interact with dApps privately.

Transfers are represented as encrypted notes. These notes are processed and validated by a relayer who handles batching, ZK proof generation, and private gas abstraction. Users maintain full privacy and control while gaining access to more advanced features.

### Curvy v3 – MPC & Shared Accounts (Planned)

The third version brings threshold signature schemes and MPC-based shared wallets to Curvy. Users will be able to co-manage stealth addresses using m-of-n signature approval, powered by Pedersen’s DKG protocol and the GG20 threshold ECDSA scheme.

This setup allows teams, DAOs, and custodians to privately manage funds together, without any single party holding the full key.
