'use client'
import { db } from '@/utils/db';
import { UserSubcriptions } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect } from 'react';
import { useUser } from '@clerk/nextjs';

const Page = () => {
  const { user } = useUser();

  useEffect(() => {
    if (user?.primaryEmailAddress?.emailAddress) {
      isUserSubscribed();
    }
  }, [user]);

  const isUserSubscribed = async () => {
    try {
      const result = await db
        .select()
        .from(UserSubcriptions)
        .where(eq(UserSubcriptions.email, user?.primaryEmailAddress?.emailAddress || ''));

      console.log(result);
      // Handle or render `result` as needed
    } catch (error) {
      console.error('Error fetching subscription:', error);
      // Handle error gracefully
    }
  };

  return (
    <div>
      {/* Add your UI components here */}
    </div>
  );
};

export default Page;
