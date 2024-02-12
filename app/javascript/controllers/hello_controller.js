import { Controller } from "@hotwired/stimulus"
export default class extends Controller {

  static targets = ["calendar"]

  connect() {
    console.log(this.calendarTarget)
    var calendarEl = this.calendarTarget;
    const calOptIns = {
      events: [
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
      ],
      select: function (selectionInfo) {
        calendar.addEvent({
          title: 'dynamic event',
          start: selectionInfo.start,
          end: selectionInfo.end //need these and not endTime/startTime, otherwise they won't re-render
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
      left: 'prev,next',
      center: 'title',
        right: 'timeGridWeek,timeGridDay'
      }
    };
    var calendar = new FullCalendar.Calendar(calendarEl, calOptIns);
    calendar.render();
  }
}
