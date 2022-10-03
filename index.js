// Your code here
function createEmployeeRecord(employee) {

    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employees) {
    return employees.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(event) {
    let [date, hour] = event.split(" ")
    console.log("date", date)
    let eventObj = {
        type: "TimeIn",
        hour,
        date
    }
    
    this.timeInEvents.push(eventObj)
}
