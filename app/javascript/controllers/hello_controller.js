import { Controller } from "@hotwired/stimulus"
export default class extends Controller {

  static targets = ["calendar"]

  connect() {
    const fetcher = () =>{
      const slotValues = JSON.parse(this.data.get("myValue"))
      console.log("slotValues", slotValues)
      slotValues.forEach(element => {
        console.log("slot", element)
        const inputDate = new Date(element.start_time);
        // Create a new Date object for the desired output date
        const outputDate = new Date("2024-02-15T14:00:00");

        // Set the hours, minutes, seconds, and milliseconds of the input date to match the output date
        inputDate.setHours(outputDate.getHours(), outputDate.getMinutes(), outputDate.getSeconds(), outputDate.getMilliseconds());

        // Format the result as a string in the desired format
        const resultDateString = inputDate.toISOString();

        console.log(resultDateString);
        calOptIns.events.push({
          title: "booked",
          start: resultDateString
        })
      });
    }
    console.log(this.calendarTarget)
    var calendarEl = this.calendarTarget;
    const calOptIns = {
      select: function (selectionInfo) {
        calendar.addEvent({
          title: 'dynamic event',
          start: selectionInfo.start,
          end: selectionInfo.end
        });
        calendar.unselect();
      },
      eventClick: function (eventClickInfo) {
        eventClickInfo.event.remove();
      },
      initialView: 'timeGridWeek',
      editable: true,
      selectable: true,
      slotDuration: '01:00',
      headerToolbar: {
      left: 'title',
      center: 'prev,next',
        right: 'timeGridWeek,timeGridDay'
      }
    };
    calOptIns.events = [
      {
        title: 'Meeting',
        start: '2024-02-15T14:00:00',
        extendedProps: {
          status: 'done'
        }
      },
      {
        title: 'Birthday Party',
        start: '2024-02-15T15:00:00',
        backgroundColor: 'green',
        borderColor: 'green'
      }
    ]
    var calendar = new FullCalendar.Calendar(calendarEl, calOptIns);
    calendar.render();
    fetcher();
  }
}
