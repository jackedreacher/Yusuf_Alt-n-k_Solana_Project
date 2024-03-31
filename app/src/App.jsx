import { useMemo } from "react";

// Importing custom components and hooks
import { BlogProvider } from "src/context/Blog";
import { Router } from "src/router";
import "./App.css";

// Importing Solana Wallet Adapter components and hooks
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";


export const App = () => {
  // Initializing a connection endpoint for the Solana devnet
  const endpoint = "https://summer-fluent-isle.solana-devnet.quiknode.pro/75829a4398790c777cbdfdd40821cda8896b5ba8/";
  

  // Initializing the PhantomWalletAdapter using the useMemo hook to avoid re-creation
  // Empty array ([]) is used as the second argument since the function does not depend on any value
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  
  return (
    // ConnectionProvider wraps the application in a connection context to the Solana network
    <ConnectionProvider endpoint={endpoint}>
      {/*
        WalletProvider takes a list of wallets and attaches wallets with the wallet context
        The 'autoConnect' prop is used to automatically connect to the first wallet in the list
      */}
      <WalletProvider wallets={wallets} autoConnect>
        <BlogProvider>
          <Router />
        </BlogProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};