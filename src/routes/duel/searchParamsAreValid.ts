export function searchParamsAreValid(searchParams: URLSearchParams): boolean {
  if (searchParams.has('manualLocation')) {
    return true;
  }

  if (searchParams.has('lat') && searchParams.has('lon')) {
    return true;
  }

  return false;
}
