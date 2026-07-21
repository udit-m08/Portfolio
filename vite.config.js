import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Custom plugin to copy and setup assets on startup/build
const assetSetupPlugin = () => ({
  name: 'asset-setup',
  buildStart() {
    console.log('[Asset Setup] Starting asset organization...');

    // 1. Copy Resume
    const downloadsDir = 'C:\\Users\\Udit Mishra\\Downloads';
    const publicDir = path.resolve(__dirname, 'public');
    const resumeDest = path.join(publicDir, 'Resume.pdf');

    // Possible resume filenames in Downloads
    const resumeNames = ['UDIT MISHRA CV (1).pdf', 'Udit_Mishra_Resume.pdf', 'Udit Mishra Resume.pdf', 'Udit Mishra_CV.pdf'];
    let resumeCopied = false;

    if (fs.existsSync(downloadsDir)) {
      for (const name of resumeNames) {
        const srcPath = path.join(downloadsDir, name);
        if (fs.existsSync(srcPath)) {
          try {
            fs.copyFileSync(srcPath, resumeDest);
            console.log(`[Asset Setup] Copied resume from ${srcPath} to ${resumeDest}`);
            resumeCopied = true;
            break;
          } catch (e) {
            console.error(`[Asset Setup] Error copying resume:`, e);
          }
        }
      }
    }

    if (!resumeCopied) {
      console.log('[Asset Setup] Warning: Could not find Udit\'s resume in Downloads. Creating a mock Resume.pdf placeholder.');
      if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
      fs.writeFileSync(resumeDest, '%PDF-1.4 Mock PDF content');
    }

    // 2. Rename Hero Video
    const videoDir = path.resolve(__dirname, 'src/assets/hero video');
    const videoDest = path.join(videoDir, 'hero-video.mp4');
    let videoCopied = false;

    if (fs.existsSync(videoDir)) {
      const files = fs.readdirSync(videoDir);
      // Find the file that starts with Developer_ and ends with .mp4
      const devVideo = files.find(file => file.toLowerCase().startsWith('developer_') && file.endsWith('.mp4'));
      if (devVideo) {
        const srcPath = path.join(videoDir, devVideo);
        try {
          fs.copyFileSync(srcPath, videoDest);
          console.log(`[Asset Setup] Copied and renamed hero video from ${srcPath} to ${videoDest}`);
          videoCopied = true;
        } catch (e) {
          console.error(`[Asset Setup] Error copying video:`, e);
        }
      }
    }

    if (!videoCopied) {
      console.log('[Asset Setup] Warning: Could not find Developer_*.mp4 in hero video directory.');
      // If no video found, copy the default yusuf-hero.mp4 to hero-video.mp4 so it compiles without error
      const defaultVideo = path.join(videoDir, 'yusuf-hero.mp4');
      if (fs.existsSync(defaultVideo)) {
        try {
          fs.copyFileSync(defaultVideo, videoDest);
          console.log('[Asset Setup] Fallback: Copied yusuf-hero.mp4 to hero-video.mp4');
        } catch (e) {
          console.error(`[Asset Setup] Error copying fallback video:`, e);
        }
      }
    }

    // 3. Rename About Image / Avatar
    const aboutDir = path.resolve(__dirname, 'src/assets/about');
    const avatarDest = path.join(aboutDir, 'udit-avatar.png');
    let avatarCopied = false;

    if (fs.existsSync(aboutDir)) {
      const srcPath = path.join(aboutDir, 'image.png');
      if (fs.existsSync(srcPath)) {
        try {
          fs.copyFileSync(srcPath, avatarDest);
          console.log(`[Asset Setup] Copied about image.png to ${avatarDest}`);
          avatarCopied = true;
        } catch (e) {
          console.error(`[Asset Setup] Error copying avatar:`, e);
        }
      }
    }

    if (!avatarCopied) {
      console.log('[Asset Setup] Warning: Could not find image.png in about directory.');
      const defaultAvatar = path.join(aboutDir, 'yusuf-avatar.png');
      if (fs.existsSync(defaultAvatar)) {
        try {
          fs.copyFileSync(defaultAvatar, avatarDest);
          console.log('[Asset Setup] Fallback: Copied yusuf-avatar.png to udit-avatar.png');
        } catch (e) {
          console.error(`[Asset Setup] Error copying fallback avatar:`, e);
        }
      }
    }

    console.log('[Asset Setup] Finished asset organization.');
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), assetSetupPlugin()],
})
