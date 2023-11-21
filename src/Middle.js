import React from 'react';

function Middle() { 
  // Données fictives pour l'exemple
  const equipeDeBasket = {
    
    matchs: [
      { Saison: 'Les Panthères', Match: 92, Equipe1: 88, Score1: 'Les Panthères', Score2: 92, Equipe2: 88 },
      // Ajoutez autant de matchs que nécessaire
    ],
  };

  return (
    <div>
      <div className='col-10'>
        <h3>Matchs :</h3>
        <table>
          <thead>
            <tr>
              <th>Saison</th>
              <th>Match</th>
              <th>Equipe1</th>
              <th>Score1</th>
              <th>Score2</th>
              <th>Equipe2</th>
            </tr>
          </thead>
          <tbody>
            {equipeDeBasket.matchs.map((match, index) => (
              <tr key={index}>
                <td>{match.Saison}</td>
                <td>{match.Match}</td>
                <td>{match.Equipe1}</td>
                <td>{match.Score1}</td>
                <td>{match.Score2}</td>
                <td>{match.Equipe2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Middle;
