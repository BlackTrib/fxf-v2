import { put } from '@vercel/blob';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const filePath = resolve(process.cwd(), 'cpanel-deploy-optimized.tar.gz');
const fileBuffer = readFileSync(filePath);

const blob = await put('cpanel-deploy-optimized.tar.gz', fileBuffer, {
  access: 'public',
  contentType: 'application/gzip',
});

console.log('Upload successful!');
console.log('Download URL:', blob.url);
