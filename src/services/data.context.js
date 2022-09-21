import { createContext } from "react"

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const dataFinder = (data, dataGroup, dataLabel, datatype = 'value') => {
		let item;
        let group;
		if(data.status !== 2 && dataGroup !== undefined && dataLabel !== undefined){
            group = data.groups.find(item => item.label === dataGroup);
            if(group !== undefined){
			    item = group.data.find(item => item.label === dataLabel);
            }
		} else {
			item = null;
		}
		return item !== null && item !== undefined ? item[datatype] : '';
	}

    return (
        <DataContext.Provider value={{ dataFinder }}>
            { children }
        </DataContext.Provider>
    )
}
