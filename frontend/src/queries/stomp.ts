import { useStompClient, useSubscriber } from '@/providers/StompProvider';
import {
  type QueryKey,
  type UseQueryOptions,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { useEffect, useRef } from 'react';

export default function useStompQuery<DATA, ERROR>(
  queryKey: QueryKey,
  channel: string,
  newDataResolver: (previousData: DATA[], newComingData: DATA) => void,
  options?: UseQueryOptions<DATA[], ERROR>,
) {
  const { client } = useStompClient();
  const { setSubscriber } = useSubscriber();
  const queryClient = useQueryClient();
  const isSubscribedRef = useRef(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (!client.connected || isSubscribedRef.current) {
      return;
    }

    const subscription = client.subscribe(channel, (event) => {
      const previousData = queryClient.getQueryData<DATA[]>(queryKey) || [];
      const nextData = newDataResolver(previousData, JSON.parse(event.body));
      queryClient.setQueryData(queryKey, nextData);
    });

    setSubscriber(queryKey.toString(), true);
    isSubscribedRef.current = true;

    return () => {
      if (subscription) {
        subscription.unsubscribe();
        isSubscribedRef.current = false;
      }
    };
  }, [client?.connected]);

  return useQuery<DATA[], ERROR>({
    queryKey,
    queryFn: () => queryClient.getQueryData<DATA[]>(queryKey) || [],
    enabled: !!client && (options?.enabled ?? true),
    ...options,
  });
}
