import { useEffect, useState,useCallback } from "react";
import DataTable, { TableColumn } from 'react-data-table-component';
import { searchInterface,reactTableInterface,fetchUserApiInterface } from '../../util/interface'
import { searchApi } from "../../api/searchApi";
import "./ReactDataTable.css";

const ReactDataTable = ({username = "", submitClick = false, submitClicked}: reactTableInterface) => { 

	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
    const [totalRows, setTotalRows] = useState(1000);

    const columns: TableColumn<searchInterface>[] = [
        {
            name: 'login',
            selector: row => row.login,
        },
        {
            name: 'avatar_url',
            selector: row => row.avatar_url,
            cell: (row) => (<img src={row.avatar_url} alt="" className="rtable__avatar"/>)
        },
        {
            name: 'type',
            selector: row => row.type,
        },
    ];

	const paginationComponentOptions = {
		noRowsPerPage: true,
	};
    

	const fetchUsers = useCallback (async ({page = 1, handlePageChange = false} : fetchUserApiInterface) => {

		if(submitClick || handlePageChange) {

			setLoading(true);

			const response:any = await searchApi(username, page);
			const total_count = response.data.total_count;
			const users = response.data.items;

			setData(users);

			if (total_count > 1000) {
				setTotalRows(1000) 
			}
			else {
				setTotalRows(total_count);
			}

			setLoading(false);
			submitClicked(false)

		}

	  }, [submitClick, username, submitClicked]);


     const handlePageChange = (page : number) => {
		const pageChangeParams = {handlePageChange : true, page}
		if(username !== "") fetchUsers(pageChangeParams);
	};

	const handlePerRowsChange = async (page : number) => {

		if (username !== "") {
	
			setLoading(true);

			const response:any = await searchApi(username, page)

			setData(response.data.items);
			setLoading(false);

		}

	};

	useEffect(() => {
		if(username !== "" && submitClick) fetchUsers({handlePageChange : true, page : 1}); 
	  }, [fetchUsers, username, submitClick]);

	return (
		<DataTable
			title="Users"
			columns={columns}
			data={data}
			progressPending={loading}
			pagination
			paginationServer
			paginationTotalRows={totalRows}
			paginationComponentOptions={paginationComponentOptions}
			onChangeRowsPerPage={handlePerRowsChange}
			onChangePage={handlePageChange}
            className="rtable"
		/>
	);
}

export default ReactDataTable;
