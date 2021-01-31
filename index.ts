import * as jwt from 'jsonwebtoken';
import { load } from 'ts-dotenv';
const env = load({
  MUSIC_SECRET_KEY: String,
  TERM_ID: String,
  KEY_ID: String
})

const secret_key = `-----BEGIN PRIVATE KEY-----
${env.MUSIC_SECRET_KEY}
-----END PRIVATE KEY-----`

const option = {
  expiresIn: '3d',
  header:  {
    alg: 'ES256',
    kid: env.KEY_ID
  }
}

const payload = {
	iss: env.TERM_ID
}

const token = jwt.sign(payload, secret_key, option);

console.log(`
=======TOKEN=======
${token}
===================
`);
