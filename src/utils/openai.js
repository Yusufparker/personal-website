// Import library OpenAI
import { OpenAI } from "openai";

// Buat variabel lokal untuk menyimpan nilai variabel lingkungan `OPENAI_API_KEY`
const apiKey = process.env.OPENAI_API_KEY;



// Buat objek OpenAI dengan menggunakan variabel lokal
const openai = new OpenAI({ apiKey });

// Fungsi untuk mengirim pesan ke OpenAI
export async function sendMsgToOpenAi(message) {
   try {
      const res = await openai.completions.create({
         model: 'text-davinci-003',
         prompt: message,
         temperature: 0.7,
         max_tokens: 100,
         top_p: 1,
         frequency_penalty: 0,
         presence_penalty: 0,
      });

      return res.choices[0].text;
   } catch {
      return 'Ada masalah di API, mungkin kuota gratisannya habis.';
   }
}
