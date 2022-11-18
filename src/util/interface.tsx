export interface searchInterface {
    login: string,
    avatar_url: string,
    type: string,
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
    disabled?:boolean;
    setUsername?: (username: string) => void;
    setDisabled?: (disabled: boolean) => void;
    onFormSubmit?: (formsubmit: object) => object;
}

export interface reactTableInterface {
    username: string;
    submitClick: boolean;
    submitClicked:(submitClick : boolean) => void
}

export interface fetchUserApiInterface {
    page: number;
    handlePageChange: boolean
}