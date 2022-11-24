import { useEffect, useState,useCallback } from "react";
import DataTable, { TableColumn } from 'react-data-table-component';
import { searchInterface,reactTableInterface,fetchUserApiInterface } from '../../util/interface'
import { searchApi } from "../../api/searchApi";
import "./ReactDataTable.css";

const ReactDataTable = ({username = "", submitClick = false, testSuccessBit = false, submitClicked}: reactTableInterface) => { 

	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
    const [totalRows, setTotalRows] = useState(1000);

    const columns: TableColumn<searchInterface>[] = [
        {
            name: 'Login',
            selector: row => row.login,
        },
        {
            name: 'Avatar Url',
            selector: row => row.avatar_url,
            cell: (row) => (<img src={row.avatar_url} alt="" className="rtable__avatar"/>)
        },
        {
            name: 'User Type',
            selector: row => row.type,
        },
    ];

	const paginationComponentOptions = {
		noRowsPerPage: true,
	};

	const mockData = [ { "login": "samick17", "avatar_url": "https://avatars.githubusercontent.com/u/5528607?v=4", "type": "User", "html_url": "https://github.com/samick17", }, { "login": "sarahalvessa", "avatar_url": "https://avatars.githubusercontent.com/u/98770963?v=4", "html_url": "https://github.com/sarahalvessa", "type": "User", }, { "login": "sahildua2305", "avatar_url": "https://avatars.githubusercontent.com/u/5206277?v=4", "html_url": "https://github.com/sahildua2305", "type": "User", }];

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
		if(testSuccessBit) return;
		if(username !== "" && submitClick) fetchUsers({handlePageChange : true, page : 1}); 
	  }, [fetchUsers, username, submitClick,testSuccessBit]);

	return (
		<>
		<DataTable
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
			onRowClicked={(row) => window.open(
				row.html_url,
				'_blank'
			  )}
		/>
		{testSuccessBit && <DataTable
			columns={columns}
			data={mockData}
			progressPending={loading}
			pagination
			paginationServer
			paginationTotalRows={3}
			paginationComponentOptions={paginationComponentOptions}
            className="rtable"
			/>
		}
		</>
	);
}

export default ReactDataTable;
