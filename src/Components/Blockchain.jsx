import React from "react";
import "./Frontend.css";

export default function Blockchain() {
  const steps = [
    {
      step: "Step 1: Understand Blockchain Fundamentals",
      items: [
        "Learn the Basics of Blockchain Technology",
        "Understand Distributed Ledgers, Blocks, and Hash Functions",
        "Study Consensus Mechanisms (Proof of Work, Proof of Stake, etc.)",
        "Explore the Concept of Decentralization"
      ]
    },
    {
      step: "Step 2: Learn Cryptography & Security Basics",
      items: [
        "Study Public & Private Key Cryptography",
        "Understand Hashing Algorithms (SHA-256, Keccak)",
        "Learn Digital Signatures and Wallets",
        "Explore Security Best Practices in Blockchain"
      ]
    },
    {
      step: "Step 3: Get Familiar with Blockchain Platforms",
      items: [
        "Start with Ethereum (Most Popular for Developers)",
        "Explore Other Platforms: Solana, Polygon, Avalanche, Hyperledger",
        "Understand Layer 1 vs Layer 2 Chains",
        "Learn about Blockchain Nodes & Clients (Geth, Parity, etc.)"
      ]
    },
    {
      step: "Step 4: Learn Smart Contract Development",
      items: [
        "Master Solidity Language (Ethereum)",
        "Use Development Tools (Remix IDE, Truffle, Hardhat)",
        "Understand Gas, Transactions, and Events",
        "Write, Test & Deploy Smart Contracts"
      ]
    },
    {
      step: "Step 5: Develop Decentralized Applications (DApps)",
      items: [
        "Learn Web3.js or Ethers.js to Interact with Blockchain",
        "Build Frontend with React or Vue",
        "Integrate Metamask for Wallet Connection",
        "Deploy Smart Contracts to Testnets (Goerli, Mumbai)"
      ]
    },
    {
      step: "Step 6: Explore Token Standards & NFTs",
      items: [
        "Understand ERC-20 (Fungible Tokens)",
        "Explore ERC-721 & ERC-1155 (NFT Standards)",
        "Mint Your Own Tokens & NFTs",
        "Build NFT Marketplaces"
      ]
    },
    {
      step: "Step 7: Learn Advanced Blockchain Concepts",
      items: [
        "Oracles & External Data (Chainlink, Band)",
        "Decentralized Storage (IPFS, Filecoin)",
        "Interoperability & Bridges",
        "Zero-Knowledge Proofs and Layer 2 Solutions"
      ]
    },
    {
      step: "Step 8: Explore Blockchain Use Cases",
      items: [
        "Decentralized Finance (DeFi)",
        "Supply Chain & Logistics",
        "Gaming & Metaverse (Web3 Gaming)",
        "Identity & Voting Systems"
      ]
    },
    {
      step: "Step 9: Deploy to Production",
      items: [
        "Audit Smart Contracts for Security",
        "Deploy to Mainnet",
        "Monitor and Maintain Blockchain Applications",
        "Follow Gas Optimization Practices"
      ]
    },
    {
      step: "Step 10: Continuous Learning",
      items: [
        "Contribute to Open Source Blockchain Projects",
        "Explore Emerging Chains (Sui, Aptos, StarkNet)",
        "Stay Updated on Blockchain Trends & Protocols",
        "Participate in Hackathons & Web3 Communities"
      ]
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">Blockchain Development Roadmap</h1>
      <p className="frontend-description">
        Follow these steps to become a Blockchain Developer and build decentralized applications on modern blockchain platforms.
      </p>

      {steps.map((section, index) => (
        <div key={index} className="frontend-section">
          <h2 className="frontend-step-title">{section.step}</h2>
          <ul className="frontend-list">
            {section.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
