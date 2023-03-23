import { createSlice } from "@reduxjs/toolkit";

const customTeam = {
  teamName: "Custom",
  teams: [
    {
      id: 6,
      name: "T21",
      border_color: "#ffaaff",
      value: 2,
      currentList: "roster",
    },
    {
      id: 10,
      value: 0,
      name: "E31",
      border_color: "#ffaaff",
      currentList: "roster",
    },
    {
      id: 11,
      name: "E32",
      border_color: "#ffaaff",
      value: 1,
      currentList: "roster",
    },
    {
      id: 12,
      name: "T31",
      border_color: "#ffaaff",
      value: 2,
      currentList: "roster",
    },
    {
      id: 13,
      value: 0,
      name: "A31",
      border_color: "#ffaaff",
      currentList: "roster",
    },
    {
      id: 15,
      name: "M31",
      border_color: "#ffaaff",
      value: 2,
      currentList: "roster",
    },
    {
      id: 18,
      name: "F302",
      border_color: "#ffaaff",
      value: 5,
      currentList: "roster",
    },
    {
      id: 19,
      name: "F313",
      border_color: "#ffaaff",
      value: 5,
      currentList: "roster",
    },
    {
      id: 23,
      name: "E42",
      border_color: "#ffaaff",
      value: 2,
      currentList: "roster",
    },
    {
      id: 1,
      name: "BC41",
      border_color: "#ffaaff",
      value: 2,
      currentList: "roster",
    },
    {
      id: 32,
      name: "ME51",
      border_color: "#ffaaff",
      value: 4,
      currentList: "roster",
    },
    {
      id: 36,
      name: "BC51",
      border_color: "#ffaaff",
      value: 5,
      currentList: "roster",
    },
  ],
};

const initialState = {
  roster: [
    customTeam,
    {
      teamName: "South Weber",
      teams: [
        {
          id: 1,
          value: 0,
          name: "E1",
          border_color: "#ffaaff",
          currentList: "roster",
        },
        {
          id: 2,
          name: "M1",
          border_color: "#ffaaff",
          value: 1,
          currentList: "roster",
        },
        {
          id: 3,
          name: "A1",
          border_color: "#ffaaff",
          value: 2,
          currentList: "roster",
        },
      ],
    },
    {
      teamName: "Clinton",
      teams: [
        {
          id: 4,
          value: 0,
          name: "A21",
          border_color: "#ffaaff",
          currentList: "roster",
        },
        {
          id: 5,
          name: "E21",
          border_color: "#ffaaff",
          value: 1,
          currentList: "roster",
        },
        {
          id: 6,
          name: "T21",
          border_color: "#ffaaff",
          value: 2,
          currentList: "roster",
        },
        {
          id: 7,
          name: "M21",
          border_color: "#ffaaff",
          value: 3,
          currentList: "roster",
        },
        {
          id: 8,
          name: "F201",
          border_color: "#ffaaff",
          value: 4,
          currentList: "roster",
        },
        {
          id: 9,
          name: "F202",
          border_color: "#ffaaff",
          value: 5,
          currentList: "roster",
        },
      ],
    },
    {
      teamName: "Syracuse",
      teams: [
        {
          id: 10,
          value: 0,
          name: "E31",
          border_color: "#ffaaff",
          currentList: "roster",
        },
        {
          id: 11,
          name: "E32",
          border_color: "#ffaaff",
          value: 1,
          currentList: "roster",
        },
        {
          id: 12,
          name: "T31",
          border_color: "#ffaaff",
          value: 2,
          currentList: "roster",
        },
        {
          id: 13,
          value: 0,
          name: "A31",
          border_color: "#ffaaff",
          currentList: "roster",
        },
        {
          id: 14,
          name: "A32",
          border_color: "#ffaaff",
          value: 1,
          currentList: "roster",
        },
        {
          id: 15,
          name: "M31",
          border_color: "#ffaaff",
          value: 2,
          currentList: "roster",
        },
        {
          id: 16,
          name: "BC31",
          border_color: "#ffaaff",
          value: 3,
          currentList: "roster",
        },
        {
          id: 17,
          name: "F301",
          border_color: "#ffaaff",
          value: 4,
          currentList: "roster",
        },
        {
          id: 18,
          name: "F302",
          border_color: "#ffaaff",
          value: 5,
          currentList: "roster",
        },
        {
          id: 19,
          name: "F313",
          border_color: "#ffaaff",
          value: 5,
          currentList: "roster",
        },
      ],
    },
    {
      teamName: "North Davis",
      teams: [
        {
          id: 20,
          name: "A41",
          border_color: "#ffaaff",
          value: 2,
          currentList: "roster",
        },
        {
          id: 21,
          value: 0,
          name: "A42",
          border_color: "#ffaaff",
          currentList: "roster",
        },
        {
          id: 22,
          name: "E41",
          border_color: "#ffaaff",
          value: 1,
          currentList: "roster",
        },
        {
          id: 23,
          name: "E42",
          border_color: "#ffaaff",
          value: 2,
          currentList: "roster",
        },
        {
          id: 24,
          name: "T42",
          border_color: "#ffaaff",
          value: 3,
          currentList: "roster",
        },
        {
          id: 25,
          name: "M42",
          border_color: "#ffaaff",
          value: 4,
          currentList: "roster",
        },
        {
          id: 26,
          name: "F401",
          border_color: "#ffaaff",
          value: 5,
          currentList: "roster",
        },
        {
          id: 27,
          name: "F402",
          border_color: "#ffaaff",
          value: 5,
          currentList: "roster",
        },
      ],
    },
    {
      teamName: "Layton",
      teams: [
        {
          id: 28,
          value: 0,
          name: "A51",
          border_color: "#ffaaff",
          currentList: "roster",
        },
        {
          id: 29,
          name: "A52",
          border_color: "#ffaaff",
          value: 1,
          currentList: "roster",
        },
        {
          id: 30,
          name: "A53",
          border_color: "#ffaaff",
          value: 2,
          currentList: "roster",
        },
        {
          id: 31,
          name: "A54",
          border_color: "#ffaaff",
          value: 3,
          currentList: "roster",
        },
        {
          id: 32,
          name: "ME51",
          border_color: "#ffaaff",
          value: 4,
          currentList: "roster",
        },
        {
          id: 33,
          name: "ME52",
          border_color: "#ffaaff",
          value: 5,
          currentList: "roster",
        },
        {
          id: 34,
          name: "ME53",
          border_color: "#ffaaff",
          value: 5,
          currentList: "roster",
        },
        {
          id: 35,
          name: "E54",
          border_color: "#ffaaff",
          value: 5,
          currentList: "roster",
        },
        {
          id: 36,
          name: "BC51",
          border_color: "#ffaaff",
          value: 5,
          currentList: "roster",
        },
      ],
    },
    {
      teamName: "Kaysville",
      teams: [
        {
          id: 37,
          name: "E61",
          border_color: "#ffaaff",
          value: 4,
          currentList: "roster",
        },
        {
          id: 38,
          name: "T61",
          border_color: "#ffaaff",
          value: 5,
          currentList: "roster",
        },
        {
          id: 39,
          name: "A61",
          border_color: "#ffaaff",
          value: 5,
          currentList: "roster",
        },
        {
          id: 40,
          name: "M61",
          border_color: "#ffaaff",
          value: 5,
          currentList: "roster",
        },
        {
          id: 41,
          name: "F601",
          border_color: "#ffaaff",
          value: 5,
          currentList: "roster",
        },
      ],
    },
    {
      teamName: "Farmington",
      teams: [
        {
          id: 42,
          name: "E71",
          border_color: "#ffaaff",
          value: 5,
          currentList: "roster",
        },
        {
          id: 43,
          name: "T71",
          border_color: "#ffaaff",
          value: 4,
          currentList: "roster",
        },
        {
          id: 44,
          name: "A71",
          border_color: "#ffaaff",
          value: 5,
          currentList: "roster",
        },
        {
          id: 45,
          name: "M71",
          border_color: "#ffaaff",
          value: 5,
          currentList: "roster",
        },
        {
          id: 46,
          name: "F701",
          border_color: "#ffaaff",
          value: 5,
          currentList: "roster",
        },
      ],
    },
    {
      teamName: "Hill AFB",
      teams: [
        {
          id: 47,
          name: "T101",
          border_color: "#ffaaff",
          value: 5,
          currentList: "roster",
        },
        {
          id: 48,
          name: "BC111",
          border_color: "#ffaaff",
          value: 5,
          currentList: "roster",
        },
      ],
    },
  ],
};

const rosterTeamsSlice = createSlice({
  name: "rosterTeams",
  initialState,
  reducers: {
    spliceRoster: (state, action) => {
      state.teams.splice(action.payload, 1);
    },
    insertRoster: {
      reducer: (state, action) => {
        state.teams.splice(action.payload.id - 1, 0, action.payload);
      },
      prepare: (value) => {
        return {
          payload: {
            ...value,
            currentList: "roster",
          },
        };
      },
    },
  },
});

export const { spliceRoster, insertRoster } = rosterTeamsSlice.actions;

export default rosterTeamsSlice.reducer;
