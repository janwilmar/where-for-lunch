import { Router } from 'express';

import { searchPlaces, getPlaceDetails } from '../services/yelp';
import {
  toSearchPlacesParams,
  fromSearchPlacesParams,
  fromSearchPlacesDetailsParams,
} from '../lib/placeHelper';

const router = Router();
router.get('/', async (req, res) => {
  const list = await searchPlaces(toSearchPlacesParams(req.query));
  res.send(list.map(i => fromSearchPlacesParams(i)));
});

router.get('/:id', async (req, res) => {
  const obj = await getPlaceDetails(req.params.id);
  res.send(fromSearchPlacesDetailsParams(obj));
});

export default router;
