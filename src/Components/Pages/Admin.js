import React from 'react';
import { CSVLink } from "react-csv"; // Import DWN CSV component
import useWindowDimensions from '../useWindowDimensions';
import styled from 'styled-components'
import { useTable, useSortBy } from 'react-table'


// Table style
const Styles = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

// Sort Table Col Fn
function Table( { columns, data } ) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        {
            columns,
            data,
        },
        useSortBy
    )
    // We don't want to render all 2000 rows for this example, so cap
    // it at 20 for this use case
    const firstPageRows = rows.slice( 0, 20 )
    return (
        <>
            <table { ...getTableProps() }>
                <thead>
                { headerGroups.map( headerGroup => (
                    <tr { ...headerGroup.getHeaderGroupProps() }>
                        { headerGroup.headers.map( column => (
                            // Add the sorting props to control sorting. For this example
                            // we can add them into the header props
                            <th { ...column.getHeaderProps( column.getSortByToggleProps() ) }>
                                { column.render( 'Header' ) }
                                {/* Add a sort direction indicator */ }
                                <span>
                    { column.isSorted
                        ? column.isSortedDesc
                            ? ' 🔽'
                            : ' 🔼'
                        : '' }
                  </span>
                            </th>
                        ) ) }
                    </tr>
                ) ) }
                </thead>
                <tbody { ...getTableBodyProps() }>
                { firstPageRows.map(
                    ( row, i ) => {
                        prepareRow( row );
                        return (
                            <tr { ...row.getRowProps() }>
                                { row.cells.map( cell => {
                                    return (
                                        <td { ...cell.getCellProps() }>{ cell.render( 'Cell' ) }</td>
                                    )
                                } ) }
                            </tr>
                        )
                    }
                ) }
                </tbody>
            </table>
        </>
    )
}


/*
* Main Fn
*/
const Admin = ( props ) => {

    const columns = [
        {
            Header: 'Name',
            accessor: 'name'
        }, {
            Header: 'Email',
            accessor: 'email'
        }, {
            Header: 'Password',
            accessor: 'password'
        }, {
            Header: 'Phone',
            accessor: 'phone'
        }
    ]

    // Get Screen Size to optimize output
    const { height, width } = useWindowDimensions();
    let data = null;
    data = JSON.parse( localStorage.getItem( 'stored_data' ) )
  
   if (data === null) {
    return <div className="p-5 h3">داده ای برای نمایش وجود ندارد</div>;
  }

    return (
        <div className={ `${ props.className }` }>
            <div className="container">
                <div className="row pt-5 pb-5">
                    { ( () => {
                        if ( localStorage.length > 0 ) {
                            /*
                             * If the screen size is shorter than 500 pixels, an error message will appear on the screen.
                             */
                            if ( width >= 500 ) {
                                return (
                                    <div>
                                        <Styles>
                                            <Table columns={ columns }
                                                   data={ JSON.parse( localStorage.getItem( 'stored_data' ) ) }/>
                                        </Styles>

                                    </div>
                                )
                            } else {
                                return (
                                    <div className="alert alert-danger" role="alert">
                                        متاسفانه این صفحه برای تلفن مناسب نیست!
                                    </div>
                                )
                            }
                        }
                        if ( data === null ) {
                            return <div>blu</div>
                        }


                    } )() }
                    <div>
                        <button className="btn btn-success w-auto">
                            {/* Download Table as .CSV file */ }
                            <CSVLink data={ data } class="text-white">
                                دانلود
                                <i className="fa fa-download text-white me-2" aria-hidden="true"/>
                            </CSVLink>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
