import type { Coordinate } from "../../../types/coordinate";

/**
 * Encodes the user's location as URL search params
 */
export function encodeLocationAsParams({coordinates, manualLocation}: {coordinates?: Coordinate; manualLocation?: string}): URLSearchParams {
  const params = new URLSearchParams();
  // prefer manualLocation to coordinates in case user is on VPN or otherwise we get it wrong
  if (manualLocation) {
    params.append('manualLocation', manualLocation);
    return params;
  }

  if (coordinates) {
    params.append('lat', coordinates.lat.toString());
    params.append('lon', coordinates.lon.toString());
  }

  return params;
}