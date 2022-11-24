export interface searchInterface {
    login: string,
    avatar_url: string,
    type: string,
    html_url: string,
}

export interface searchResponseInterface {
    data:  {
                    total_count : number,
                    incomplete_results : boolean,
                    items: itemsInterface[],
            }
}

export interface itemsInterface {
    login: string,
    avatar_url: string,
    type: string
}

export interface responseInterface {
    data: searchResponseInterface[],
    success: boolean,
    message: string
}

export interface ReactDataTableInterface {
    columns: any,
    api: ( pageNumber: number, pageSize: number ) => object,
    updateTable: boolean,
    sorting: boolean,
    defaultSortBy: string,
    sortOrder: string,
    selectorFunctionToSelectorNameMapping: Array<any>,
    filtering: boolean,
    filterByOptions: Array<any>,
    conditionalRowStyles: Array<any>,
    pageSizeOptions: Array<number>,
    showPagination: boolean,
}

export interface columnsInterface {
    name : string,
    cell : string,
    grow : number
}

export interface searchInputInterface {
    username?: string;
    setUsername?: (username: string) => void;
    onFormSubmit?: (formsubmit: object) => object;
    success?: boolean
}

export interface reactTableInterface {
    username: string;
    submitClick: boolean;
    testSuccessBit?: boolean;
    submitClicked:(submitClick : boolean) => void
}

export interface fetchUserApiInterface {
    page: number;
    handlePageChange: boolean
}
export interface homeTestInterface {
    testSuccessBit?: boolean;
}