import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css"; // Import calendar styles

const localizer = momentLocalizer(moment);

const MyCalendar = ({ events }) => {
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        views={["month", "week", "day"]}
        defaultView={"month"}
        toolbar={false}

      />
    </div>
  );
};

export default MyCalendar;
