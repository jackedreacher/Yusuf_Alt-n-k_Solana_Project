// solanaService.js
import { Keypair, PublicKey, Connection, Commitment } from "@solana/web3.js";
import { getOrCreateAssociatedTokenAccount, mintTo } from "@solana/spl-token";
import wallet from "./wallet.json";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const commitment= "confirmed";
const connection = new Connection("https://api.devnet.solana.com", commitment);
const token_decimals = 1_000_000n;
const mint = new PublicKey("DXCDrdqw3ez2iTA9FDE77M2CSPoDS682QsoEvrEFF2hQ");

export async function createATA() {
  try {
    const ata = await getOrCreateAssociatedTokenAccount( 
      connection, 
      keypair, 
      mint, 
      keypair.publicKey 
    );
    return { success: true, ataAddress: ata.address.toBase58() };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function mintTokens() {
  try {
    const ata = await getOrCreateAssociatedTokenAccount( 
        connection, 
        keypair, 
        mint, 
        keypair.publicKey 
      );// ... You'll need the ATA address here
    const mintTx = await mintTo(
      connection,
      keypair,
      mint,
      ata,
      keypair.publicKey,
      10n * token_decimals
    );
    return { success: true, mintTxId: mintTx };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
