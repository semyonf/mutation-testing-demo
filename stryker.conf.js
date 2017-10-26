module.exports = function(config) {
    config.set({
        files: [{
                pattern: 'src/**/*.js',
                mutated: true,
                included: false
            },
            'test/**/*.js'
        ],
        testRunner: 'mocha',
        mutator: 'es5',
        transpilers: [],
        reporter: ['html', 'clear-text', 'progress'],
        testFramework: 'mocha',
        coverageAnalysis: 'perTest'
    });
};
