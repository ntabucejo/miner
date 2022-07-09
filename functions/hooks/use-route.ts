import { useRouter } from "next/router";

const useRoute = (url: string) => {
  const router = useRouter();
  const isActive = router.pathname.startsWith(url);
  return { isActive };
};

export default useRoute;
