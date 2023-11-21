import React from 'react';

function Middle() { 
  // Données fictives pour l'exemple
  const equipeDeBasket = {
    nom: 'NBA',
    joueurs: [
      { nom: 'John Doe', poste: 'Ailier', maillot: 23 },
      { nom: 'Jane Doe', poste: 'Meneur', maillot: 7 },
      // Ajoutez autant de joueurs que nécessaire
    ],
    matchs: [
      { adversaire: 'Les Tigres', scoreEquipe: 85, scoreAdversaire: 78 },
      { adversaire: 'Les Panthères', scoreEquipe: 92, scoreAdversaire: 88 },
      // Ajoutez autant de matchs que nécessaire
    ],
  };

  return (
    <div>
      <div className='col-10'>
        <h2>Équipe de Basket : {equipeDeBasket.nom}</h2>
        <h3>Joueurs :</h3>
        <ul>
          {equipeDeBasket.joueurs.map((joueur, index) => (
            <li key={index}>
              {joueur.nom} - {joueur.poste} - Maillot #{joueur.maillot}
            </li>
          ))}
        </ul>

        <h3>Matchs :</h3>
        <table>
          <thead>
            <tr>
              <th>Adversaire</th>
              <th>Score de l'Équipe</th>
              <th>Score de l'Adversaire</th>
            </tr>
          </thead>
          <tbody>
            {equipeDeBasket.matchs.map((match, index) => (
              <tr key={index}>
                <td>{match.adversaire}</td>
                <td>{match.scoreEquipe}</td>
                <td>{match.scoreAdversaire}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Middle;
