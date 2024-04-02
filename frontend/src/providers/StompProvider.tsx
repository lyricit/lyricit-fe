'use client';

import { useUserStore } from '@/stores/user';
import { Client, type StompSubscription } from '@stomp/stompjs';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useMap } from 'react-use';

const StompContext = createContext<StompClient>({
  client: undefined,
  setSubscriber: () => {},
  getSubscriber: () => null,
});

interface StompClient {
  client?: Client;
  setSubscriber: <K extends string>(key: K, value: StompSubscription) => void;
  getSubscriber: <K extends string>(key: K) => StompSubscription | null;
}

export const StompProvider = ({ children }: { children: React.ReactNode }) => {
  const [isConnected, setIsConnected] = useState(false);
  const id = useUserStore((state) => state.id);
  const [subscribers, { set, get }] =
    useMap<Record<string, StompSubscription>>();

  const client = useMemo(
    () =>
      new Client({
        brokerURL: 'wss://api-dev.lyricit.site/ws',
        debug: (str) => {
          console.log(str);
        },
        reconnectDelay: 1000,
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
        onConnect: () => {
          setIsConnected(true);
        },
        onDisconnect: () => {
          setIsConnected(false);
        },
      }),
    [],
  );

  useEffect(() => {
    if (id) {
      client.connectHeaders = {
        memberId: id,
      };
      client.activate();
    }

    return () => {
      client.deactivate();
    };
  }, [id, client]);

  return (
    <StompContext.Provider
      value={{ client, setSubscriber: set, getSubscriber: get }}
    >
      {children}
    </StompContext.Provider>
  );
};

export const useStompClient = () => {
  const { client } = useContext(StompContext);

  if (client === undefined) {
    throw new Error('useStompClient must be used within a StompProvider');
  }
  return { client };
};

export const useSubscriber = () => {
  const { getSubscriber, setSubscriber } = useContext(StompContext);

  if (getSubscriber === undefined || setSubscriber === undefined) {
    throw new Error('useSubscriber must be used within a StompProvider');
  }

  return { getSubscriber, setSubscriber };
};
