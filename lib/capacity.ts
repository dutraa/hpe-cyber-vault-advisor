import type { Discovery } from './model';
export function toTiB(value:number,unit:'TB'|'TiB'){return unit==='TiB'?value:value*1e12/2**40}
// Indicative logical footprint and physical usable requirement; no raw drive capacity inferred.
export function indicativeCapacity(d:Discovery){const protectedTiB=toTiB(d.capacity,d.unit);const grownTiB=protectedTiB*(1+d.growth/100)**d.years;const journalTiB=protectedTiB*d.changeRate/100*d.retention;const effectiveTiB=grownTiB+journalTiB;const reducible=effectiveTiB*(1-d.nonReducible/100);const usableTiB=(reducible/d.reduction+effectiveTiB*d.nonReducible/100)*(1+d.headroom/100);return {protectedTiB,grownTiB,journalTiB,effectiveTiB,usableTiB,rawTiB:null as null};}
