import React from 'react'

export default function AllformationsPresentiel({ formationsPresentiel }) {
    console.log(formationsPresentiel);
    if (!formationsPresentiel) {
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
                            <th className='pr-5'><span class="las la-sort"></span> Adresse</th>
                            <th><span class="las la-sort"></span> Duree</th>
                            <th><span class="las la-sort"></span> date Debut </th>
                            <th><span class="las la-sort"></span>  date Fin</th>
                        </tr>
                    </thead>
                    <tbody>
                    {formationsPresentiel.map(formationPresentiel => (
                        <tr key={formationPresentiel.id}>
                        <td>{formationPresentiel.id}</td> 

                            <td>{formationPresentiel.session_formation.nom}</td> 
                            <td class="d-inline-block text-truncate" style={{maxWidth: '300px'}}>{formationPresentiel.adresse}</td>
                            <td>{formationPresentiel.session_formation.duree}</td>
                            <td>{formationPresentiel.session_formation.dateDebut}</td>
                            <td>{formationPresentiel.session_formation.dateDebut}</td>
                        </tr>
                    ))}

                    </tbody>
                </table>
            </div>

        </div>
    )
}
