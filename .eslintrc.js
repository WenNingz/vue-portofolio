module.exports = {
  parserOptions: {
    parser: 'babel-eslint'
  },
  "rules": {
    // "no-unused-vars": 0,
    // "vue/name-property-casing": ["error", "kebab-case"],
    // "comma-dangle": ["error", "only-multiline"],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  extends: [
    // 'plugin:vue/recommended',
    'plugin:vue/essential',
    // 'standard'
  ],
  plugins: [
    'vue'
  ],
}