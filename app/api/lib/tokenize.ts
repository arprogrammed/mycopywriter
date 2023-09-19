import { spawn } from 'child_process';

export async function getCount(text: string) {

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