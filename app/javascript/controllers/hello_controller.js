import { Controller } from "@hotwired/stimulus"
export default class extends Controller {

  static targets = ["calendar"]

  connect() {
    const fetcher = () =>{
      fetch('/doctors/1/slots', {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(response => response.json())
        .then(data => {
          console.log('Data:', data);
          // Handle the data as needed
        })
        .catch(error => {
          console.error('Error:', error);
          // Handle errors
        });
    }
    fetcher();
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
        start: '2024-02-12T14:00:00',
        extendedProps: {
          status: 'done'
        }
      },
      {
        title: 'Birthday Party',
        start: '2024-02-12T15:00:00',
        backgroundColor: 'green',
        borderColor: 'green'
      }
    ]
    var calendar = new FullCalendar.Calendar(calendarEl, calOptIns);
    calendar.render();
  }
}
