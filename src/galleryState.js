import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getPhotos = createAsyncThunk(
    'photos/getPhotos',
    async () => {
        const response = await fetch('https://picsum.photos/v2/list?page=3&limit=10');
        const formattedResponse = await response.json();
        return formattedResponse;
    }
)

export const gallerySlice = createSlice({
    name:"gallery",
    initialState:{
        photos: [],
        isLoading: false,
    },
    builder:{
        [getPhotos.pending]: (state) => {
            state.isLoading = true;
        },
        [getPhotos.fulfilled]: (state, action) => {
            state.photos = action.payload;
            state.isLoading = false;
        },
        [getPhotos.rejected]: (state) => {
            state.isLoading = false;
        },
    },
});

export default gallerySlice.reducer;