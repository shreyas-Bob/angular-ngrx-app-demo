
function ManageCronData(CronValue, expression) {
    debugger
    const cron = require('node-cron')
  
      const shell = require('shelljs')
      if (CronValue != null) {
          cron.schedule(CronValue, function () {
              console.log("schedule script running");
              console.log("cron set as" + expression);
              return true;
          })
      }
      return false;

    
}