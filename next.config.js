/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: async () => {
        return [
          {
            source: '/api/tokenizer',
            destination:
              process.env.NODE_ENV === 'dev'
                ? 'http://127.0.0.1:3000/api/tokenizer'
                : '/api/tokenizer',
          },
        ]
      },
}

module.exports = nextConfig
