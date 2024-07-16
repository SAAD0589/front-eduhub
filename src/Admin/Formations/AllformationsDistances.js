import React from 'react'

export default function AllformationsDistances({ formationsDistances }) {
    console.log(formationsDistances);
    if (!formationsDistances) {
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
                        <th><span class="las la-sort "></span> Nom de Formations</th>
                        <th><span class="las la-sort"></span> Duree</th>
                        <th><span class="las la-sort"></span> date Debut </th>
                        <th><span class="las la-sort"></span>  date Fin</th>
                    </tr>
                    </thead>
                    <tbody>
                    {formationsDistances.map(formationDistances => (
                        <tr key={formationDistances.id}>
                            <td>{formationDistances.id}</td>

                            <td class="d-inline-block text-truncate" style={{maxWidth: '300px'}}>{formationDistances.session_formation.description}</td>

                            <td>{formationDistances.session_formation.duree}</td>
                            <td>{formationDistances.session_formation.dateDebut}</td>
                            <td>{formationDistances.session_formation.dateDebut}</td>
                        </tr>
                    ))}

                    </tbody>
                </table>
            </div>

        </div>
    )
}
