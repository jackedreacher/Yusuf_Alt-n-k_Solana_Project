
import React, { useState } from 'react';
import { createATA, mintTokens } from '../solanaService'; 

const sql_transfer = () => {
  const [ataAddress, setAtaAddress] = useState('');
  const [mintTxId, setMintTxId] = useState('');
  const [error, setError] = useState('');

  const handleCreateATA = async () => {
    const result = await createATA();
    if (result.success) {
      setAtaAddress(result.ataAddress);
    } else {
      setError(result.error);
    }
  };

  const handleMintTokens = async () => {
    // Make sure you have the ATA address before minting
    if (!ataAddress) { 
      setError('Create an ATA first');
      return; 
    }

    const result = await mintTokens();
    if (result.success) {
      setMintTxId(result.mintTxId);
    } else {
      setError(result.error);
    }
  };

  return (
    <div>
      <button onClick={handleCreateATA}>Create ATA</button>
      <button onClick={handleMintTokens}>Mint Tokens</button>
      {ataAddress && <p>Your ATA address: {ataAddress}</p>}
      {mintTxId && <p>Mint transaction ID: {mintTxId}</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
    </div>
  );
};

export default sql_transfer; 
