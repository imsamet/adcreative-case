module.exports = {
  plugins: {
    'postcss-import': {},
    '@csstools/postcss-global-data': {
      files: ['src/styles/_mixins.css', 'src/styles/_theme.css', 'src/styles/_mixins.css'],
    },
    'postcss-preset-env': {
      features: {
        'custom-media-queries': true,
        'custom-properties': false,
        'nesting-rules': true,
      },
    },
    'postcss-nested': {},
    'postcss-custom-media': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  },
};
