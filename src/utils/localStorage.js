const BOOKINGS_KEY = 'medify_bookings';

// Get all bookings from localStorage
export const getBookings = () => {
  try {
    const bookings = localStorage.getItem(BOOKINGS_KEY);
    return bookings ? JSON.parse(bookings) : [];
  } catch (error) {
    console.error('Error reading bookings from localStorage:', error);
    return [];
  }
};

// Save a new booking
export const saveBooking = (booking) => {
  try {
    const bookings = getBookings();
    const newBooking = {
      ...booking,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    bookings.push(newBooking);
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
    return newBooking;
  } catch (error) {
    console.error('Error saving booking to localStorage:', error);
    throw error;
  }
};

// Remove a booking by id
export const removeBooking = (id) => {
  try {
    const bookings = getBookings();
    const filteredBookings = bookings.filter(booking => booking.id !== id);
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(filteredBookings));
    return true;
  } catch (error) {
    console.error('Error removing booking from localStorage:', error);
    throw error;
  }
};

// Clear all bookings
export const clearAllBookings = () => {
  try {
    localStorage.removeItem(BOOKINGS_KEY);
    return true;
  } catch (error) {
    console.error('Error clearing bookings from localStorage:', error);
    throw error;
  }
};

