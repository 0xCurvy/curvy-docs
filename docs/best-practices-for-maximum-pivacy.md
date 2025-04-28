# Best Practices for Maximum Privacy

Curvy is designed to give you strong on-chain privacy, but like with any privacy tool, how you use it matters.

Here are the best practices to help you stay fully private when using Curvy:

### Use a New Stealth Address for Every Deposit

- Each time someone sends you funds, use a fresh stealth address.  
- If you reuse a stealth address, someone could connect multiple transactions back to you which breaks your privacy.

Curvy automatically generates a new stealth address each time someone uses your Curvy ID, so you don’t have to worry about this if you share your ID instead of copying/pasting addresses.

### Don’t Reuse Recipient Addresses When Sending

When sending crypto:

- Only send from one stealth address at a time.  
- Avoid sending to the same external wallet repeatedly from different stealth addresses.

Why? If an external wallet (e.g. 0xabc...) receives funds from 3 different stealth addresses, a third party might reasonably guess those stealth addresses belong to the same person. That makes it easier to deanonymise you.

### Avoid Aggregating Funds Manually

Let’s say you’ve received funds across 3 stealth addresses and want to move them to a single wallet:

- If you send all the funds to one wallet in a single transaction, you’ve created a visible link between them.  
- Instead, consider spending them separately or wait until Curvy supports private batching (see below).

### **Real-World Privacy Isn’t Always Simple**

We understand that in real-world usage, users want more than just 1:1 private transfers. They want to manage funds efficiently, use DeFi protocols, and interact with apps across chains.

To make this seamless, we’re actively working on advanced privacy features:

- **Private batch transactions**  
  Send assets from multiple stealth addresses in a single transaction, without revealing links between them.

- **Private swaps and bridges**  
  Swap tokens or bridge assets between chains while preserving privacy end to end.

- **Private interactions with dApps and DeFi protocols**  
  Use dApps and DeFi protocols like staking, lending, or voting without exposing your address or identity.

These features will unlock a new level of convenience, making it easy to manage your assets while keeping your identity protected, with zero compromises on privacy.
