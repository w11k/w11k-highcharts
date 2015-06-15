# w11k-highcharts Directive for AngularJS

w11k-highcharts is an AngularJS directive created to wrap the Highcharts and Highstock charting library.


## Documentation and Demo

See Project Website at http://w11k.github.com/w11k-highcharts


## Installation

* Install via Bower (w11k-highcharts) or download manually from our release repository (https://github.com/w11k/w11k-highcharts-bower)
* Include scripts into your application (w11k-highcharts and dependencies):
  * jQuery - because Highcharts relies on it
  * AngularJS
  * Highcharts or Highstock
  * Highcharts Additions (if you want to use e.g. a bubble chart)
* Add dependency 'w11k-highcharts' to your angular module


## Usage

```
  <div w11k-highcharts
       w11k-highcharts-config="chart.config"
       w11k-highcharts-data="chart.data"
       >
  </div>
```

w11k-highcharts-config takes a config object that follows the Highcharts JSON Format that you can see at http://api.highcharts.com/highcharts

w11k-highcharts-data takes an Array of data points, who populate the `series` objects of the Highcharts JSON config.

## Roadmap

see milestones and issues at https://github.com/w11k/w11k-highcharts/issues

## License

MIT - see LICENSE file