import { normalize, schema } from 'normalizr';

export const course = new schema.Entity('courses');

export const courseNormalizer = (data) => schema(data, [course]);