import {configureStore} from '@reduxjs/toolkit';
import { BookingTicketReducer } from './reducer/BookingTicketReducer';


export const store = configureStore({
    reducer: {
        BookingTicketReducer,
    }
})