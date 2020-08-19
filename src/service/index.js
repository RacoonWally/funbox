import mockData from "./mockData";

export const getList = (type) => {
    switch (type) {
        case "data": {
            return mockData
        }
        default: return;
    }
};
