export const module = {
    rules: [
        {
            test: /\.m?js$/,
            loader: 'esbuild-loader',
            exclude: /node_modules/,
        },
    ],
    resolve: {
        extensions: ['.js', '.jsx']
      }
};