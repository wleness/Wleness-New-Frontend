import { WLENESS_URL } from "@data/urls";

export default function getCanonical(path) {
  const domain_name = `${WLENESS_URL}${path}`;
  return domain_name;
}
