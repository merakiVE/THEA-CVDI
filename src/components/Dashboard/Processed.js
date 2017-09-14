//Dependencies
import React, {Component} from 'react';
import reqwest from 'reqwest';


//Ant Disign
import { Table, Input, Button, Icon } from 'antd';


//NProgress
import NProgress from 'nprogress'


class Processed extends Component {
	constructor(){
		super()

		this.state = {
			data: [],
			pagination: {},
			loading: false,
			filterDropdownVisible: false,
			searchText: '',
    		filtered: false,
		}
	}
    componentDidMount(){
    	this.fetch();
        NProgress.done()
    }

    handleTableChange = (pagination, filters, sorter) => {
      	const pager = { ...this.state.pagination };
      	pager.current = pagination.current;
	    this.setState({
	       	pagination: pager,
	    });
	    this.fetch({
	        results: pagination.pageSize,
	        page: pagination.current,
	        sortField: sorter.field,
	        sortOrder: sorter.order,
	        ...filters,
	    });
    }

    fetch = (params = {}) => {
      	console.log('params:', params);
		this.setState({ loading: true });

		reqwest({
		    url: 'https://randomuser.me/api',
		    method: 'get',
		    data: {
		        results: 5,
		        ...params,
		    },
		    type: 'json',
		}).then((data) => {
		    const pagination = { ...this.state.pagination };
		    // Read total count from server
		    // pagination.total = data.totalCount;
		    pagination.total = 200;
		    this.setState({
		        loading: false,
		        data: data.results,
		        pagination,
		    });

		    localStorage.data = JSON.stringify(data)
		}).catch( e => console.error( 'Ha ocurrido un error' ));

    }

    onInputChange = (e) => {
        this.setState({ searchText: e.target.value });
    }

    onSearch = () => {
        const { searchText, data } = this.state;
        const reg = new RegExp(searchText, 'gi');

        this.setState({
			filterDropdownVisible: false,
			filtered: !!searchText,
			data: data.map((record) => {
				const match = record.name.first.match(reg);

				if (!match) {
				  return null;
				}
				return {
				  	...record,
					name: (
						<span>
							{record.name.first.split(reg).map((text, i) => (
							i > 0 ? [<span className="highlight">{match[0]}</span>, text] : text
							))}
						</span>
					),
				};
			}).filter(record => !!record),
        });

        console.log(this.state.data)
    }

    render() {
    	const columns = [{
    		title: 'Name',
    		dataIndex: 'name',
    		sorter: true,
    		render: name => `${name.first} ${name.last}`,
    		width: '20%',
    		key: 'name',
    		filterDropdown: (
    		  	<div className="custom-filter-dropdown">
    		    	<Input
    		      		ref={ele => this.searchInput = ele}
    		      		placeholder="Search name"
    		      		value={this.state.searchText}
    		      		onChange={this.onInputChange}
    		      		onPressEnter={this.onSearch}
    		    	/>
    		    	<Button type="primary" onClick={this.onSearch}>Search</Button>
    		  	</div>
    		),
    		filterIcon: <Icon type="smile-o" style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }} />,
    		onFilterDropdownVisibleChange: (visible) => {
    		  	this.setState({
    		    	filterDropdownVisible: visible,
    		  	}, () => this.searchInput.focus());
    		},
    	}, 
    	{
    	  	title: 'Gender',
    	  	dataIndex: 'gender',
    	  	filters: [
    	    	{ text: 'Male', value: 'male' },
    	    	{ text: 'Female', value: 'female' },
    	  	],
    	  	width: '20%',
    	}, 
    	{
    	  	title: 'Email',
    	  	dataIndex: 'email',
    	}];

        return (
            <div>
                <Table 
                	columns={columns}
			        rowKey={record => record.registered}
			        dataSource={this.state.data}
			        pagination={this.state.pagination}
			        loading={this.state.loading}
			        onChange={this.handleTableChange}
		      	/>
            </div>
        );
    }
}

export default Processed;
