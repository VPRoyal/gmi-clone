"use client";
import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import { getCollections } from '@/services/collectionService';
import { Collection } from '@/types/collection';

interface CollectionContextType {
  collections: Collection[];
  paginatedCollections: Collection[];
  isLoading: boolean;
  refreshCollections: () => Promise<void>;
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
  collectionsPerPage: number;
  setCollectionsPerPage: (value: number) => void;
}

const CollectionContext = createContext<CollectionContextType | undefined>(undefined);

export const CollectionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [collectionsPerPage, setCollectionsPerPage] = useState<number>(10);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const refreshCollections = async () => {
    try {
      if(!collections) setIsLoading(true);
      const data = await getCollections();
      setCollections(data);
    } catch (error) {
      console.error('Failed to fetch collections:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSetCollectionsPerPage = (value: number) => {
    const allowed = [10, 15, 20, 25];
    if (allowed.includes(value)) {
      setCollectionsPerPage(value);
      setCurrentPage(1); // reset to first page
    } else {
      throw new Error(`Invalid value: ${value}. Allowed values: ${allowed.join(', ')}`);
    }
  };

  const totalPages = Math.ceil(collections.length / collectionsPerPage);
  const paginatedCollections = collections.slice(
    (currentPage - 1) * collectionsPerPage,
    currentPage * collectionsPerPage
  );

  // Initial fetch + 60s refresh
  useEffect(() => {
    refreshCollections();
    intervalRef.current = setInterval(refreshCollections, 60 * 1000); // 60 seconds

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <CollectionContext.Provider
      value={{
        collections,
        paginatedCollections,
        isLoading,
        refreshCollections,
        currentPage,
        totalPages,
        setCurrentPage,
        collectionsPerPage,
        setCollectionsPerPage: handleSetCollectionsPerPage,
      }}
    >
      {children}
    </CollectionContext.Provider>
  );
};

export const useCollectionContext = (): CollectionContextType => {
  const context = useContext(CollectionContext);
  if (!context) {
    throw new Error('useCollectionContext must be used within a CollectionProvider');
  }
  return context;
};
