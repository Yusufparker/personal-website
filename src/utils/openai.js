import {OpenAI } from "openai";



const openai = new OpenAI({
    apiKey:'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', 
    dangerouslyAllowBrowser: true,
});


export async function sendMsgToOpenAi(message){
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
    return 'Ada masalah di api hehe, mungkin keabisan kuota gratisannya..'

  }
}