    const seleniumServer = require('selenium-server');
    const phantomjs = require('phantomjs-prebuilt');
    const chromedriver = require('chromedriver');
    const geckodriver = require('geckodriver');
    
    require('nightwatch-cucumber')({
      cucumberArgs: [ '--require','timeout.js',
                      '--require', 'hooks.js',
                      '--require', 'create-html-report.js',
                      '--require','features/step_definitions',
                      '--format', 'json:reports/cucumber.json',
                      '--format', 'pretty', 
                      'features']
    });
    
    module.exports = {
      output_folder: './reports',
      custom_assertions_path: '',
      live_output: false,
      disable_colors: false,
      page_objects_path: 'page-objects',
      selenium: {
        start_process: true,
        server_path: seleniumServer.path,
        log_path: '',
        host: '127.0.0.1',
        port: 4444
      },
      test_settings: {
        default: {
          launch_url: 'https://www.google.com',
          selenium_port: 4444,
          selenium_host: '127.0.0.1',
          screenshots: {
            enabled: false,
            on_error: false,
            on_failure: false,
            path: './reports/screens'
          },
          desiredCapabilities: {
            browserName: 'phantomjs',
            javascriptEnabled: true,
            acceptSslCerts: true,
            acceptInsecureCerts : true,
            'phantomjs.binary.path': phantomjs.path,
            "phantomjs.cli.args" : ["--ignore-ssl-errors=true"]
          }
        },
        chrome: {
          desiredCapabilities: {
            browserName: 'chrome',
            javascriptEnabled: true,
            acceptSslCerts: true
          },
          selenium: {
            cli_args: {
              'webdriver.chrome.driver': chromedriver.path
            }
          }
        },
        firefox: {
          desiredCapabilities: {
            browserName: 'firefox',
            javascriptEnabled: false,
            marionette: true,
            acceptSslCerts : true,
            acceptInsecureCerts : true
          },
          selenium: {
            cli_args: {
              'webdriver.gecko.driver': geckodriver.path
            }
          }
        }
      }
    };