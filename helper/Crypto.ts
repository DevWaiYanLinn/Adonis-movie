import crypto, { scryptSync } from "crypto";
class Crypto {
  private salt = crypto.randomBytes(16);

  public hashSync(password) {
    return scryptSync(password, this.salt, 64, {
      cost: 16384,
      blockSize: 1,
      parallelization: 1,
    }).toString("hex");
  }
}

export default new Crypto();
