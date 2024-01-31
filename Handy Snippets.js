// Get the task activity instance ID
var activityInstanceId = task.execution.getActivityInstanceId();

// Use a regular expression to extract the process definition key
var processDefinitionKey = activityInstanceId.match(/^(.*?):/)[1];

// Get the task ID
var taskId = task.execution.getVariable("taskId");

//Retrieve the time query of the currnet task instance
var timeQuery = task
.getProcessEngineServices()
.getHistoryService()
.createHistoricTaskInstanceQuery()
.taskId(taskId);

//Retrieve the only member of the array object
var times = [];
times = timeQuery.list();
var endTime = times.get(0).getEndTime();

//Retrieve the assignee query of the currnet task instance
var query = task
  .getProcessEngineServices()
  .getIdentityService()
  .createUserQuery()
  .userIdIn(task.assignee);

//Retrieve the only member of the array object
var users = [];
users = query.list();
var userFullName = users.get(0).getFirstName() + " " + users.get(0).getLastName();

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

//Cleaned full user task listeners complete script (Inspection General Group-IGG Sample)
var x = JSON.parse(requestData);
var disabledTextIGG = x.data.processData.disabledTextIGG;
var textTemplate = x.data.processData.textTemplate;

//Retrieve the assignee query of the currnet task instance
var query = task
  .getProcessEngineServices()
  .getIdentityService()
  .createUserQuery()
  .userIdIn(task.assignee);

//Retrieve the only member of the array object
var users = [];
users = query.list();
var userFullName = users.get(0).getFirstName() + " " + users.get(0).getLastName();

// Get the task ID
var taskId = task.execution.getVariable("taskId");

//Retrieve the time query of the currnet task instance
var timeQuery = task
.getProcessEngineServices()
.getHistoryService()
.createHistoricTaskInstanceQuery()
.taskId(taskId);

//Retrieve the only member of the array object
var times = [];
times = timeQuery.list();
var endTime = times.get(0).getEndTime();

docDescriptionIGG = x.data.processData.docDescriptionIGG;
completeDocIGG = x.data.processData.completeDocIGG;

if (completeDocIGG == "yes") {
  if (textTemplate != "") {
    disabledTextIGG = disabledTextIGG + "<br>" + userFullName + ": " + textTemplate + " in: " + endTime;
  } else {
    disabledTextIGG = disabledTextIGG + "<br>" + userFullName + ": " + "(بدون کامنت)" + " in: " + endTime;
  }
} else {
  if (disabledTextIGG != "") {
    disabledTextIGG =
      disabledTextIGG + "<br>" + userFullName + "(شرح نقص): " + docDescriptionIGG + " in: " + endTime;
  } else {
    disabledTextIGG = userFullName + "(شرح نقص): " + docDescriptionIGG + " in: " + endTime;
  }
}

x.data.processData.disabledTextIGG = disabledTextIGG;
x.data.processData.textTemplate = "";
x.data.processData.checkIGGeld = true;
task.execution.setVariable("requestData", org.camunda.spin.Spin.JSON(x));

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

//Cleaned full user task listeners complete script (Doc Defect Planing Maintenance General Group-DDPMGG Sample)
var x = JSON.parse(requestData);
var docDefectDDPMGG = x.data.processData.docDefectDDPMGG;
var textTemplatePM = x.data.processData.textTemplatePM;

//Retrieve the assignee query of the currnet task instance
var query = task
  .getProcessEngineServices()
  .getIdentityService()
  .createUserQuery()
  .userIdIn(task.assignee);

//Retrieve the only member of the array object
var users = [];
users = query.list();
var userFullName = users.get(0).getFirstName() + " " + users.get(0).getLastName();

// Get the task ID
var taskId = task.execution.getVariable("taskId");

//Retrieve the time query of the currnet task instance
var timeQuery = task
.getProcessEngineServices()
.getHistoryService()
.createHistoricTaskInstanceQuery()
.taskId(taskId);

//Retrieve the only member of the array object
var times = [];
times = timeQuery.list();
var endTime = times.get(0).getEndTime();

if (docDefectDDPMGG == ""){
    if (textTemplatePM != "") {
        docDefectDDPMGG = userFullName + ": " + textTemplatePM + " in: " + endTime;
        } else {
        docDefectDDPMGG = userFullName + ": " + "(بدون کامنت)" + " in: " + endTime;
        }
    } else {
    if (textTemplatePM != "") {
    docDefectDDPMGG = docDefectDDPMGG + "<br>" + userFullName + ": " + textTemplatePM + " in: " + endTime;
    } else {
    docDefectDDPMGG = docDefectDDPMGG + "<br>" + userFullName + ": " + "(بدون کامنت)" + " in: " + endTime;
    }
}

x.data.processData.docDefectDDPMGG = docDefectDDPMGG;
x.data.processData.textTemplatePM = "";
task.execution.setVariable("requestData", org.camunda.spin.Spin.JSON(x));

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

//Cleaned full user task execution listeners end script (Inspection Boss General Group-IBGG Sample)
//Set global variable of the submitted group total information
var x = JSON.parse(requestData);
execution.setVariable("GG", org.camunda.spin.Spin.JSON(x));


//API Keys for Power BI:
//http://localhost:8080/engine-rest
//http://localhost:8080/engine-rest/process-instance
//http://localhost:8080/engine-rest/tasks
//http://localhost:8080/engine-rest/variable-instance
