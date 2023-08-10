import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Table({paths, types, columns, datas}) {

    const navigate = useNavigate();

    const toSnakeCase = (str = '') => {
        const strArr = str.split(' ');
        const snakeArr = strArr.reduce((acc, val) => {
            return acc.concat(val.toLowerCase());
        }, []);
        return snakeArr.join('_');
    };

    const handleDetail = (id) => {
        navigate(paths + '/' + id);
    }

    const handleEdit = (id) => {
        navigate(paths + '/edit/' + id);
    }

    useEffect(() => {
        
    }, []);

    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-3">
                <div className="flex items-center justify-between pb-4">
                    <div>
                        {types ? (
                                <select className="rounded-lg text-black dark:text-white" id="type">
                                    {
                                        types.map((item, key) => (
                                            <option key={key}>{item}</option>
                                        ))
                                    }
                                </select>
                            )
                                :
                            null
                        }
                    </div>
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="table-search" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
                    </div>
                </div>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                </div>
                            </th>
                            {
                                columns.map((item, key) => (
                                    <th key={key} scope='col' className='px-6 py-3'>
                                        {item}
                                    </th>
                                ))
                            }
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                datas.map((item, key) => (
                                    <React.Fragment key={key}>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td className="w-4 p-4">
                                                <div className="flex items-center">
                                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                                </div>
                                            </td>
                                            {columns.map((item2, key) => (
                                                key == 0 ? 
                                                (
                                                    <th key={key} scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        {item?.[toSnakeCase(item2)] ?? "-"}
                                                    </th>

                                                )
                                                :
                                                (
                                                    <td key={key} className="px-6 py-4">
                                                        {item?.[toSnakeCase(item2)] ?? "-"}
                                                    </td>
                                                )
                                            ))}
                                            <td className="px-6 py-4">
                                                <a onClick={() => handleDetail(item?.id)} className="cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline">Detail</a>
                                            </td>
                                            <td className="px-6 py-4">
                                                <a onClick={() => {handleEdit(item?.id)}} className="cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                            </td>
                                        </tr>
                                    </React.Fragment>
                                ))
                            }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table;