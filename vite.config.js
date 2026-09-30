import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// A GitHub Project Page needs /repository-name/ as its public base URL.
// Vercel (and GitHub user pages) need the root /.
const githubRepository = process.env.GITHUB_REPOSITORY || '';
const [owner, repo] = githubRepository.split('/');
const isUserPage = repo && owner && repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;
const base = process.env.GITHUB_PAGES === 'true'
  ? isUserPage ? '/' : `/${repo || 'dibya-portfolio'}/`
  : '/';

export default defineConfig({ plugins: [react()], base });
