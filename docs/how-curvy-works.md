# How Curvy Works

## **1. How Privacy Works in Curvy**

Curvy gives you privacy by default. When you receive crypto, a stealth address is automatically generated. When you send, you choose which stealth address to send from. That makes it nearly impossible to track your activity on-chain, as long as you follow best practices.

Here’s how it works, step by step. 

### Why Stealth Addresses?

On public blockchains, transactions are public and permanently visible. That means anyone can:

- Track how much crypto you hold
- Analyse your activity
- Link multiple transfers to the same identity

Curvy solves this by using stealth addresses, one-time-use addresses that are unique for each transaction. This makes your activity private and difficult to trace.

It’s like giving out a new phone number every time someone wants to message you. Each message is private, and no one can link them all together.

### What’s Happening Behind the Scenes

When you create your Curvy wallet, it generates 2 key pairs for you:

- A spend key that allows you to move and manage your funds
- A view key that allows your wallet to detect transactions meant for you

Your public keys are shared so others can send you funds. Your private keys stay with you - always.

**How You Receive Funds Privately**

With Curvy, you can receive crypto in 2 ways:

1. Manually generate a stealth address in the Curvy app and send it to someone  
2. Share your Curvy ID, and Curvy will automatically compute a stealth address for the sender to use

In both cases:

- The stealth address is unique to that transaction  
- Only you and the sender know this address exists  
- Only you, the recipient, can detect and spend the funds

**Fast Transaction Detection**

Curvy uses a lightweight view tag to scan for incoming transactions. This means your wallet doesn’t need to scan the entire blockchain, it only checks for relevant matches, making detection fast and efficient. This also makes private transfers fast and scalable.

**What’s Happening Under the Hood**

Here’s how this actually works behind the scenes:

- The sender uses your public view key to calculate a shared secret  
- That shared secret is used to generate a new stealth address  
- You use your private view key to detect the transaction by matching the view tag  
- You use your private spend key to unlock and access the funds

Even though the stealth address is visible on-chain, only you can recognize and spend from it. Observers can’t connect it to your Curvy ID or wallet, unless you reuse addresses or leak patterns through your behavior.

If you’re curious about the technical deep dive, check out the full protocol breakdown

### What Makes This Special?

Curvy makes privacy simple, efficient, and user-controlled:

- **Unlinkable Transfers**  
  Each transaction uses a fresh stealth address, so no one can link your payments or trace your history.

- **No Extra Complexity**  
  You just share your Curvy ID or generate a stealth address with one click. Curvy handles the rest behind the scenes.

- **Lightweight Design**  
  No full-chain scanning required. Curvy uses lightweight view tags so your wallet can detect incoming transactions quickly and efficiently.

- **Multichain by Default**  
  Works on Ethereum and Starknet, and other EVM-compatible chains are coming soon.

- **Optional Transparency**  
  You can share your view key with an auditor to prove incoming transactions, without giving them spending access.

## 2. Best Practices for Maximum Privacy

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

## **3. How You Stay in Control**

Curvy is a self-custody wallet, which means only you can access your funds, not Curvy, not a third party. This gives you true ownership, but it also means you’re responsible for your security.

Here’s how Curvy keeps you in control, and how you can keep your assets safe.

### You Own the Keys - Always

When you create your Curvy wallet:

- Your private keys are generated locally in your browser  
- They are never stored, uploaded, or sent to Curvy servers  
- You stay in full control, at all times

Even if Curvy goes offline, your wallet still works. You can export your keys and restore access anytime, as long as you’ve backed them up securely.  

### Your Password Protects Local Access

After wallet creation, you’ll set a password to protect your Curvy account on your current device.

- This password encrypts your wallet locally  
- Without it, even someone with access to your browser can’t use your wallet  
- If someone tries to load Curvy on the same device, they’ll need the password to unlock it

**Important:** Curvy does not store or back up your password.  
If you lose it and don’t have your recovery phrase, your wallet and funds are unrecoverable.

### We Never Store Your Private Keys

Once you create your wallet, you will have the option to back up your private keys.  
This is the only way to recover your wallet if you ever lose access on your current device.

You should:

- Write them down and store them somewhere safe (preferably offline)  
- Never share them with anyone, not even Curvy  
- Never enter them into unknown websites, pop-ups, or DMs

**Important:** If someone gets access to your private keys, they can control your funds.  
If you lose them, you lose access to your wallet — permanently.

### No Centralised Recovery, Ever

Curvy doesn’t use custodians, guardians, recovery emails, or third-party providers.

That’s the point:

- No backdoors  
- No hidden admins  
- No company that can “reset” your account

It’s just you and your keys, pure self-sovereignty.

### You Choose How to Use Your Stealth Addresses

With Curvy, you have full control over how your funds are managed — including which stealth addresses you use when sending crypto.

When making a transfer:

- You choose which stealth address to send from  
- You decide where the funds go: another stealth address, a regular wallet (EOA), or even directly into a dApp.

Curvy gives you the privacy tools, but doesn’t force specific flows.  
We provide best-practice guidelines to help you maximize your privacy, but at the end of the day, you’re in charge, and you decide how you use your wallet.

### Takeaways

- **You own your wallet:** Curvy never holds your funds or your keys  
- **You’re responsible for your recovery:** so back up your private keys securely  
- **You control your privacy:** Curvy won’t expose your info, but how you use it matters  
- **You decide how to send funds:** When making transfers, you choose which stealth address to send from. We provide best practice guidelines for maximum privacy, but the choice is always yours.

## 4. Wallets & Networks

### **Supported Wallets**

Curvy works with a range of wallets, giving you flexibility in how you create and access your Curvy account.

Currently supported wallets include:

- Argent X (browser extension) and Argent Mobile  
- MetaMask  
- Braavos  
- WalletConnect-compatible wallets (e.g. Rainbow, Trust Wallet, Zerion)

### **Supported Networks**

Curvy is currently available on the following networks:

- Ethereum  
  - Mainnet  
  - Sepolia (testnet)  
- Starknet  
  - Mainnet  
  - Sepolia (testnet)

More EVM-compatible chains are coming soon.
