# **Deep Dive: Technical Documentation**

## Cryptographic Foundations

Curvy is built on elliptic curve cryptography (ECC), leveraging the security and mathematical properties of elliptic curves to enable unlinkable payments. At its core, the protocol relies on a generator point G, which serves as the base for deriving all public and private keys. Any keypair, whether for viewing or spending, is computed as a multiple of this generator point, a standard approach in ECC-based systems.

To ensure stealth address uniqueness and unpredictability, Curvy integrates a cryptographic hash function H. This function accepts elliptic curve elements as inputs and maps them to fixed-length outputs, which are then used in address derivation. This process introduces randomness and guarantees that even if similar inputs are used, the outputs remain unpredictable and unlinkable.

**The Recipient**

Has two key pairs:

- Spend Keys (for spending)
    - Private: s
    - Public: S = sG
- View Keys (for scanning)
    - Private: v
    - Public: V = vG

The recipient publicly registers S and V, but keeps s and v secret.

**The Sender**

Generates ephemeral keys for each transaction:

- Ephemeral private key: r
- Ephemeral public key: R = rG

R is included on-chain to allow the recipient to detect the transaction.

## Generating the Stealth Address

Once the sender knows the recipient’s public view key V, they compute a shared secret using their own ephemeral private key r. This shared secret, expressed as H(rV), forms the basis for deriving a one-time stealth address. It is critical that r is freshly generated for each transaction, as this prevents address reuse and preserves unlinkability.

The actual stealth address P is computed as P = H(rV)G + S, where S is the recipient’s public spend key. This formulation ensures that even if two senders send funds to the same recipient, each stealth address will be different. Importantly, only the recipient has enough information (via their private view key v and spend key s) to detect and spend the funds.

This address never needs to be shared or communicated in advance. It is entirely derived from publicly available information plus the sender’s ephemeral randomness, keeping the recipient’s on-chain identity hidden by default.

## Fast Transaction Detection: View Tags

One of the main challenges in stealth address protocols is enabling recipients to identify which transactions are meant for them, without scanning the entire blockchain or revealing their identity. Curvy addresses this with a mechanism called a view tag, a short, derived fingerprint included in each transaction.

When the sender computes the shared secret rV, they also derive a view tag by taking the output of the hash function and reducing it modulo 2^64: T = H(rV) mod 2^64. This 64-bit tag is included as public metadata in the transaction.

On the recipient side, the wallet uses its private view key v to compute vR, which is equal to the same shared secret rV. From this, it generates the same view tag T and scans only for transactions containing matching tags. This enables efficient filtering, dramatically reducing the computational overhead compared to brute-force scanning.

Because view tags are short, publicly visible, and non-linkable, they allow fast transaction detection while maintaining full privacy.

## How the Recipient Unlocks the Funds

To claim a stealth transaction, the recipient must reconstruct the private key that controls the stealth address, but only if the transaction was truly meant for them. This is achieved by recomputing the shared secret that the sender originally used, but from the recipient's side.

Using their private view key v, the recipient computes vR, which equals rV due to the commutative properties of elliptic curve scalar multiplication. This gives them the exact shared secret the sender used to construct the stealth address.

The wallet then re-derives the view tag from this value and checks whether it matches the tag present in the transaction metadata. If there's a match, the recipient knows this transaction was intended for them.

Next, they compute the stealth private key p = H(vR) + s, using the shared secret and their private spend key. This p corresponds to the stealth address P = H(rV)G + S the sender originally computed.

Because only the recipient knows both v and s, no one else can perform this derivation, ensuring that only the intended recipient can access the funds.

Once the transaction is detected (using the view tag derived from this value), the recipient calculates the private key for the stealth address using p = H(vR) + s. This operation combines the shared secret with the recipient’s private spend key to yield the private key corresponding to the stealth address P. Only the recipient can perform this operation, since only they know v and s.

This means the recipient doesn’t need to pre-generate or register addresses. They can simply listen for transactions and derive keys on the fly, keeping their receiving activity private and scalable.

 For the full cryptographic paper, see: xxx
