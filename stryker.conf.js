module.exports = function(config) {
    config.set({
        files: [{
                pattern: 'app.js',
                mutated: true
            },
            'test/**/*.js'
        ],
        testRunner: 'mocha',
        reporter: ['html', 'clear-text', 'progress'],
        testFramework: 'mocha',
        coverageAnalysis: 'perTest'
    });
};
