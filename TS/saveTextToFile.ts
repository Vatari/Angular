
import * as fs from 'fs';

async function main() {
  const text = prompt('Enter some text to save:');
  await fs.promises.writeFile('text.txt', text);
  console.log(`Saved "${text}" to text.txt`);

  const savedText = await fs.promises.readFile('text.txt', 'utf-8');
  console.log(`Read from text.txt: "${savedText}"`);
}

main();