module.exports = {
    presets: [['@babel/preset-env']],
    overrides: [
        {
            test: ['./packages/core/**/spec/**', './packages/react/**/spec/**'],
            presets: [
                [
                    '@babel/preset-react',
                    {
                        throwIfNamespace: false,
                    },
                ],
            ],
            plugins: [
                '@babel/plugin-transform-modules-commonjs',
                ['./packages/babel', {postcss: false}],
            ],
        },
    ],
    env: {
        test: {
            presets: [
                [
                    '@babel/preset-env',
                    {
                        targets: {
                            node: 'current',
                        },
                    },
                ],
            ],
        },
    },
};
