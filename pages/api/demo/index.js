import { getPokemons } from "../../../lib/demo"

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(400).json({ error: 'Some error' });
  } else {
    getPokemons().then(pokemon => {
      res.status(200).json({ pokemons: pokemon });
    });
  }
}