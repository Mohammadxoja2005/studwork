import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_PATH } from "../../tools/constants";
import axios from "axios";

const accessToken = localStorage.getItem('accessToken');

const config = {
    headers: {
        'Authorization': `Token ${accessToken}`,
        'Content-Type': 'application/json'
    }
};

export const getMarkets = createAsyncThunk('market/project-list', () => {
    return axios.get(`${API_PATH}/market/project-list/`)
        .then((response) => {
            return response.data;
        })
})

const marketSlice = createSlice({
    name: "market",
    initialState: {
        market: [],
        loading: false
    },
    reducers: {
        createMarket(state, action) {
            const data = action.payload;

            const user = data.get('user');
            const name = data.get('name');
            const work_type = data.get('work_type');
            const specialist = data.get('specialist');
            const univer_name = data.get('univer_name')
            const course = data.get('course');
            const description = data.get('description');
            const content = data.get('content');
            const list_lit = data.get('list_lit');
            const is_top = data.get('is_top');

            const doneShopFiles = data.get('doneShopFiles');
            const demoShopFiles = data.get('demoShopFiles');

            axios.post(`${API_PATH}/market/market-full-create/`, data,
                config)
                .then((response) => {
                    axios.post(`${API_PATH}/market/file-demo-create/`, { market: response.data.id, file: demoShopFiles })
                        .then((res) => {
                            console.log('demoCreate', res);
                        })

                    axios.post(`${API_PATH}/market/file-done-create/`, { market: response.data.id, file: doneShopFiles })
                        .then((res) => {
                            console.log('doneCreate', res);
                        })
                })
        },
    },

    extraReducers: {
        [getMarkets.pending]: (state, action) => {
            state.loading = true;
        },
        [getMarkets.fulfilled]: (state, action) => {
            state.loading = false;
            state.market = action.payload;
        },
        [getMarkets.rejected]: (state, action) => {
            state.loading = false;
        }
    }
})

export const { createMarket } = marketSlice.actions;
export default marketSlice.reducer;