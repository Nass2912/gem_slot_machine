import { Controller } from "@hotwired/stimulus"
export default class extends Controller {

  static targets = ["calendar"]

  connect() {
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
    getEvents();
    function getEvents() {
      console.log(calendar.getEvents());

    }
  }
}
