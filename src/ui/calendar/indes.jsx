import moment from "moment";

export const events = [
  {
    title: "hopeson  Meeting",
    start: moment("2024-10-18T10:00:00").toDate(), // October is month 9 (0-indexed)
    end: moment("2024-10-18T10:00:00").toDate(),
  },
  {
    title: "Lunch",
    start: moment("2024-10-31T15:30:00").toDate(),
    end: moment("2024-10-31T15:50:00"),
  },
  {
    title: "final",
    start: moment("2024-10-28T12:34:00").toDate(),
    end: moment("2024-10-29T11:45:00").toDate(),
  },
];

// [
//     {
//       title: 'Meeting',
//       start: new Date(2024, 9, 30, 10, 0), // October is month 9 (0-indexed)
//       end: new Date(2024, 9, 30, 11, 0),
//     },
//     {
//       title: 'Lunch',
//       start: new Date(2024, 9, 31, 12, 0),
//       end: new Date(2024, 9, 31, 13, 0),
//     },
//   ];
