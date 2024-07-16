import React from 'react'

export default function AllUniversites({ universites }) {
    console.log(universites);
    if (!universites) {
        return <div>Loading...</div>; // Handle initial loading state if needed
    }
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
                        <th><span class="las la-sort "></span> Nom de Universites</th>
                    </tr>
                    </thead>
                    <tbody>
                    {universites.map(universites => (
                        <tr key={universites.id}>
                            <td>{universites.id}</td>
                            <td>{universites.nom}</td>
                        </tr>
                    ))}

                    </tbody>
                </table>
            </div>

        </div>
    )
}
