# Research Papers

The first version of Curvy is based on the research paper ["Elliptic Curve Pairing Stealth Address Protocols"](https://arxiv.org/abs/2312.12131). This paper introduced a way to generate one-time-use stealth addresses that can be detected and spent from using view and spend keys. It’s what allows Curvy users to receive funds without revealing a public address, and what makes every transaction unlinkable by default.

We’re also exploring post-quantum security. The paper ["Post-Quantum Secure Stealth Address Protocols"](https://eprint.iacr.org/2025/112.pdf) proposes a quantum-resistant version of Curvy that uses different cryptographic primitives (such as pairing-friendly and lattice-based constructions) to ensure the protocol remains secure in the long term. While this isn’t implemented yet, it’s already shaping how we think about long-term resilience.

Lastly, we’re researching how to make Curvy wallets work for teams and organisations. Our upcoming multisig version is based on distributed cryptography research, particularly protocols like Pedersen’s Distributed Key Generation (DKG) and GG20 (Threshold ECDSA).
