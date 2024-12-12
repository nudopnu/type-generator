// extra-webpack.config.ts
import { Configuration } from 'webpack';

export default {
  output: {
    library: 'shop',
    libraryTarget: 'umd',
  },
} as Configuration;