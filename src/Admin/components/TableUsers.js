import React from 'react'

export default function TableUsers() {
    return (
        <div class="records table-responsive">
            <div class="record-header">
                <div class="add">
                    <span>Entries</span>
                    <select name="" id="">
                        <option value="">ID</option>
                    </select>
                    <button>Add record</button>
                </div>

                <div class="browse">
                    <input type="search" placeholder="Search"
                        class="record-search" />
                    <select name="" id="">
                        <option value="">Status</option>
                    </select>
                </div>
            </div>

            <div>
                <table width="100%">
                    <thead>
                        <tr className=''>
                        <th><span class="las la-sort"></span> ID</th>

                            <th><span class="las la-sort "></span> Nom et Prenom</th>
                            <th className='pr-5'><span class="las la-sort"></span> Email</th>
                            <th><span class="las la-sort"></span> Numero Telephone</th>
                            <th><span class="las la-sort"></span> Genre </th>
                            <th><span class="las la-sort"></span>  Niveau Académique</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                                <div class="client">
                                    <div class="client-info px-2">
                                        <h4>#1</h4>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="client">
                                    <div class="client-info">
                                        <h4>Andrew Bruno</h4>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="client">
                                    <div class="client-info">
                                        <h4>bruno@crossover.org</h4>
                                    </div>
                                </div>
                            </td>
                            <td className='px-3'>
                                <div class="client ">
                                    <div class="client-info">
                                        <h4>06666666</h4>
                                    </div>
                                </div>
                            </td>
                            <td className=''>
                                <div class="client">
                                    <div class="client-info">
                                        <h4>Homme</h4>
                                    </div>
                                </div>
                            </td>
                            <td className='px-4'>
                                <div class="client">
                                    <div class="client-info">
                                        <h4>Bac +2</h4>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}
