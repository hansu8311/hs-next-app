/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  eslint: {
    dirs: ['src'], // src 디렉토리 기준으로 설정
    ignoreDuringBuilds: true,
  },
};
