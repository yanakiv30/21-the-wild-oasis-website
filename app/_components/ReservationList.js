"use client";
import ReservationCard from "./ReservationCard";
import { deleteReservation } from "../_lib/actions";

import { useOptimistic } from "react";

function ReservationList({ bookings }) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    () => {}
  );

  async function handleDelete(bookingId) {
    optimisticDelete(bookingId);
    await deleteReservation(bookingId);
  }
  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard booking={booking} 
        onDelete={handleDelete}
        key={booking.id} />
      ))}
    </ul>
  );
}
export default ReservationList;
