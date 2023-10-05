import { schemer } from 'normalizer';

export const course = new schema.Entity('courses');

export course Normalizer = (data) => schemer(data, [course]);