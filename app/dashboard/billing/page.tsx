'use client';

import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import axios from 'axios';
import { Loader2Icon } from 'lucide-react';
import { db } from '@/utils/db';
import { UserSubcriptions } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';

const BillingPage = () => {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);

  const onPayment = () => {
    setLoading(true);
    axios.post('/api/sub', {})
      .then(response => {
        console.log(response.data);
        paymentHandler(response.data.id);
      })
      .catch(error => {
        console.error('Payment error:', error);
        setLoading(false);
      });
  };

  const paymentHandler = (subId: string) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      subscription_id: subId,
      name: 'Nihil AI Applications LTD',
      description: 'Monthly Subscriptions',
      handler: async (response: any) => {
        console.log(response);
        if (response && response.razorpay_payment_id) {
          await saveSubscription(response.razorpay_payment_id);
        }
        setLoading(false);
        // Handle payment success or failure here
      }
    };

    // Ensure Razorpay script is loaded before creating instance
    if (window && (window as any).Razorpay) {
      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } else {
      console.error('Razorpay SDK not loaded');
      setLoading(false);
      // Handle error: Razorpay SDK not loaded
    }
  };

  const saveSubscription = async (paymentId: string) => {
    try {
      const result = await db.insert(UserSubcriptions)
        .values({
          email: user?.primaryEmailAddress?.emailAddress,
          userName: user?.fullName,
          active: true,
          PaymentId: paymentId,
          joinDate: moment().format('DD/MM/YYYY')
        });
      console.log('Subscription saved:', result);
      if(result){
        window.location.reload();
      }
      // Optionally, you can add success handling here
    } catch (error) {
      console.error('Error saving subscription:', error);
      // Handle error saving subscription
    }
  };

  return (
    <div className='bg-gray-100 min-h-screen'>
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      <div className='mx-auto max-w-5xl px-6 py-12 sm:px-8 lg:px-16'>
        <h2 className='text-center font-extrabold text-4xl my-6 text-blue-700'>
          Upgrade with Subscription Plans
        </h2>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
          {/* Free Plan */}
          <div className='border border-gray-200 rounded-xl p-8 shadow-lg bg-white'>
            <h3 className='text-2xl font-extrabold mb-6 text-gray-800'>Free Plan</h3>
            <p className='text-2xl font-semibold text-gray-700 mb-6'>$0/month</p>
            <ul className='list-disc list-inside space-y-3 mb-6'>
              <li>Basic features</li>
              <li>Access to limited resources</li>
              <li>Email support</li>
            </ul>
            <Button disabled className='w-full bg-blue-500 text-white py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300'>
              Select Free Plan
            </Button>
          </div>

          {/* Premium Plan */}
          <div className='border border-gray-200 rounded-xl p-8 shadow-lg bg-white'>
            <h3 className='text-2xl font-extrabold mb-6 text-gray-800'>Premium Plan</h3>
            <p className='text-2xl font-semibold text-gray-700 mb-6'>$8/month</p>
            <ul className='list-disc list-inside space-y-3 mb-6'>
              <li>All basic features</li>
              <li>Unlimited resources</li>
              <li>Priority email support</li>
              <li>Access to new features</li>
            </ul>
            <Button
              disabled={loading}
              onClick={onPayment}
              className='w-full bg-green-500 text-white py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300'>
              {loading ? <Loader2Icon className='animate-spin'/> : 'Select Premium Plan'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;
