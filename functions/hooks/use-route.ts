import { useRouter } from "next/router";

const useRoute = (url: string) => {
  const router = useRouter();
  const isRouteActive = router.pathname.startsWith(url);
  const isAtRoute = router.pathname === url;

  return { isRouteActive, isAtRoute };
};

export default useRoute;
