# Get Started with Curvy

Welcome to Curvy, your privacy-first wallet.

This guide will help you:

- Set up your wallet and Curvy ID
- Start receiving assets privately
- Send funds privately to anyone using stealth addresses

## 1. Create Your Curvy Wallet

Curvy is a self-custody wallet. That means: you control your account. If you lose access, nobody, not even Curvy, can recover it. Please read carefully and follow all the steps to stay safe.

### Step 1: Connect a Wallet

To get started:

- Tap “Connect Wallet” on the Curvy web app.
- Select the wallet you’d like to use to create your Curvy account (e.g. Argent, MetaMask Braavos).
  The wallet you connect becomes the key to your Curvy account. If you ever lose access to it, there’s no way to recover your funds. That’s why it’s important to pick a secure wallet from the start.

### Step 2: Sign the Setup Message

Once you connect your wallet, Curvy will ask you to sign a message.

This isn’t a transaction, it’s a local action that lets your wallet generate the private keys needed to manage your Curvy account and stealth addresses. This happens entirely in your browser. Your keys stay on your device and are never uploaded, shared, or stored anywhere else.

### Step 3: Set Up Your Curvy ID

Once your wallet is connected and keys are generated, you’ll set up your Curvy ID, a private ENS-style identifier like `yourname.curvy.box`

Anyone can send funds to your Curvy ID privately. Each time someone uses it, Curvy generates a brand-new stealth address, making sure there’s no link between one transaction and the next.

### Step 4: Create a Password

After choosing your Curvy ID, you’ll set a password to protect your wallet on this device. Even if someone gets access to your browser or device, they won’t be able to use your wallet without this password.

**Important:** Curvy never stores your password or wallet keys. If you lose your password, your funds can not be recovered and access is lost permanently.

## 2. Deposit Assets

There are 2 ways to receive crypto into Curvy:

### Option 1: Share Your Curvy ID

- Share your Curvy ID with the sender (e.g. `yourname.curvy.box` )
- Every time someone pastes your Curvy ID into a wallet that supports ENS, a new stealth address is generated.

This ensures every incoming payment goes to a different address, keeping all your transfers unlinkable.

### Option 2: Manually Generate a Stealth Address

- Tap “Receive” in the Curvy app
- You’ll see a new stealth address generated automatically
- You can also refresh or tap the refresh icon to get a new one

**Note:**  
- Curvy supports Ethereum and Starknet. Make sure to select the correct network before sharing your newly generated stealth address, Ethereum and Starknet addresses are different.  
- Unlike other wallets, Curvy addresses are designed for one-time use. That’s what makes them stealth addresses. Reusing an address reduces your privacy.

## 3. Send Assets Privately

To send funds privately:

- Tap “Send”
- Enter the recipient’s Curvy ID or a regular wallet address
- Choose the stealth address you want to send from
- Select token and amount
- Click “Confirm & Send”

Currently, Curvy supports 1:1 private transfers only, which is why you choose the stealth address to send from.  
However, we are working on enabling private batch transactions, where Curvy will automatically combine assets from multiple stealth addresses and handle everything under the hood, while still preserving full privacy.
