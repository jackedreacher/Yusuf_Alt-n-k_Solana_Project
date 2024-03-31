// SolanaTransfer.jsx
import React, { useEffect, useState } from 'react';
import { Commitment, Connection, Keypair, PublicKey } from "@solana/web3.js";
import { getOrCreateAssociatedTokenAccount, transfer } from "@solana/spl-token";
import wallet from  "../wallet.json";

function SolanaTransfer() {
  const [transactionLink, setTransactionLink] = useState('');

  useEffect(() => {
    const commitment = "confirmed";
    const connection = new Connection("https://api.devnet.solana.com", commitment);
    const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

    const mint = new PublicKey("EjJ7Ur9DL463nSCkc1d1DGnboPHpqVU4cZnecwsjXe3m");
    const to = new PublicKey("C9ZZ4ggdMceMGPZjuseTapyBR2n7WMFfgLiVBwBd7hFV");

    const transferTokens = async () => {
      const from_ata = await getOrCreateAssociatedTokenAccount(
        connection,
        keypair,
        mint,
        keypair.publicKey
      );

      const to_ata = await getOrCreateAssociatedTokenAccount(
        connection,
        keypair,
        mint,
        to
      );

      const tx = await transfer(
        connection,
        keypair,
        from_ata.address,
        to_ata.address,
        keypair.publicKey,
        1000000n
      );

      setTransactionLink(`https://explorer.solana.com/tx/${tx}?cluster=devnet`);
    };

    transferTokens();
  }, []);

  return (
    <div>
      <h2>Solana Token Transfer</h2>
      {transactionLink && (
        <p>
          Successfully transferred! Transaction Link:{' '}
          <a href={transactionLink} target="_blank" rel="noopener noreferrer">
            {transactionLink}
          </a>
        </p>
      )}
    </div>
  );
}

export default SolanaTransfer;
