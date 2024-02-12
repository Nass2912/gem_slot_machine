import { Controller } from "@hotwired/stimulus"
export default class extends Controller {

  static targets = ["calendar"]

  connect() {
    console.log(this.calendarTarget)
    var calendarEl = this.calendarTarget;
    const calOptIns = {
      initialView: 'dayGridDay',
      headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'dayGridWeek,dayGridDay'
      }
    };
    var calendar = new FullCalendar.Calendar(calendarEl, calOptIns);
    calendar.render();
  }
}
