import { useRouter } from "next/router";

const useRoute = (url: string) => {
  const router = useRouter();
  const isRouteActive = router.pathname.startsWith(url);
  return { isRouteActive };
};

export default useRoute;
