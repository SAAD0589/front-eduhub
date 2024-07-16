import React from 'react'

export default function AllEtudiants({ etudiants }) {
    console.log(etudiants);
    if (!etudiants) {
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

                            <th><span class="las la-sort "></span> Nom et Prenom</th>
                            <th className='pr-5'><span class="las la-sort"></span> Email</th>
                            <th><span class="las la-sort"></span> Numero Telephone</th>
                            <th><span class="las la-sort"></span> Genre </th>
                            <th><span class="las la-sort"></span>  Niveau Académique</th>
                        </tr>
                    </thead>
                    <tbody>
                    {etudiants.map(etudiant => (
                        <tr key={etudiant.id}>
                            <td>{etudiant.id}</td> 
                            <td>{etudiant.nom} {etudiant.prenom}</td>
                            <td>{etudiant.email}</td>
                            <td>{etudiant.NumTelephone}</td>
                            <td>{etudiant.Genre}</td>
                            <td>{etudiant.niveauAcademique}</td>
                        </tr>
                    ))}

                    </tbody>
                </table>
            </div>

        </div>
    )
}
