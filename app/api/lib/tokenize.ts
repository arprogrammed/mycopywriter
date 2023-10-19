import { spawn } from 'child_process';

// First iteration of running a spawn process to tokenize the prompt and extract a token count.
export async function getCount(text: string) {

  // Wrapped in a promise to allow the Python script to finish.
  // EDIT: Dropped the use of this due to Next.js needing it wrapped in Flask, but runs locally.
  const tkc = new Promise<string>((resolve, reject) => {
      const tokcount = spawn("python", ["tokenizer.py", `${text}`, "cl100k_base"]);
    
      tokcount.stdout.on('data', (data: Buffer) => {
        resolve(data.toString().trim());
      });
      
      tokcount.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });
      
      tokcount.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
      });
  });

  const tk: string = await tkc;
  return tk;
};