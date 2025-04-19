'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Label } from './label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useEffect, useState } from 'react';

type Props = {
  timeRange: string;
  onTimeRangeChange: (range: string) => void;
};

const TotalSales = ({ timeRange, onTimeRangeChange }: Props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState({
    totalSales: 0,
    topStoreSales: 0,
    topStoreTrend: 0,
    topStoreName: '',
    topProductSales: 0,
    topProductTrend: 0,
    topProductName: '',
    storesPerformance: 0,
    storesPerformanceTrend: 0
  });

  // Auth token
  const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoidGVzdHRAZXhhbXBsZS5jb20iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3NDUwMzI0OTEsImV4cCI6MTc0NTExODg5MX0.NrmyT65FNl-oYgDrwratnF74pq2UkSYQDF0YWhnBilw';

  // Request headers with auth token
  const headers = {
    'Authorization': `Bearer ${AUTH_TOKEN}`,
    'Content-Type': 'application/json'
  };

  // Convert timeRange to days for API requests
  const getDays = (range: string) => {
    switch (range) {
      case '7 derniers jours': return 7;
      case '30 derniers jours': return 30;
      case '90 derniers jours': return 90;
      default: return 7;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      const days = getDays(timeRange);
      
      try {
        // Updated endpoint paths to match the actual controller configuration
        // Fetch total sales
        const salesResponse = await fetch(`http://localhost:3001/dashboard/total-sales?days=${days}`, {
          headers
        });
        
        if (!salesResponse.ok) {
          throw new Error(`Sales request failed with status ${salesResponse.status}`);
        }
        const salesData = await salesResponse.json();
        console.log('Sales data:', salesData);
        
        // Fetch top store
        const storesResponse = await fetch(`http://localhost:3001/dashboard/top-stores?limit=1`, {
          headers
        });
        
        if (!storesResponse.ok) {
          throw new Error(`Stores request failed with status ${storesResponse.status}`);
        }
        const storesData = await storesResponse.json();
        console.log('Stores data:', storesData);
        
        // Fetch top product
        const productsResponse = await fetch(`http://localhost:3001/dashboard/top-products?limit=1`, {
          headers
        });
        
        if (!productsResponse.ok) {
          throw new Error(`Products request failed with status ${productsResponse.status}`);
        }
        const productsData = await productsResponse.json();
        console.log('Products data:', productsData);
        
        // Fetch store performance
        const performanceResponse = await fetch('http://localhost:3001/dashboard/store-performance', {
          headers
        });
        
        if (!performanceResponse.ok) {
          throw new Error(`Performance request failed with status ${performanceResponse.status}`);
        }
        const performanceData = await performanceResponse.json();
        console.log('Performance data:', performanceData);
        
        setData({
          totalSales: salesData.amount || 0,
          topStoreSales: storesData[0]?.value || 0,
          topStoreTrend: storesData[0]?.change || 0,
          topStoreName: storesData[0]?.name || '',
          topProductSales: productsData[0]?.value || 0,
          topProductTrend: productsData[0]?.change || 0,
          topProductName: productsData[0]?.name || '',
          storesPerformance: performanceData.percentage || 0,
          storesPerformanceTrend: performanceData.change || 0
        });
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [timeRange]);

  const format = (n: number) => `${n.toLocaleString()} DA`;
  const trendColor = (trend: number) => trend >= 0 ? 'text-green-600' : 'text-red-600';
  
  if (loading) {
    return <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {[...Array(4)].map((_, i) => (
        <Card key={i} className="animate-pulse">
          <CardContent className="p-6 h-32"></CardContent>
        </Card>
      ))}
    </div>;
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-800">
        <h3 className="font-semibold mb-2">Error loading dashboard data</h3>
        <p>{error}</p>
        <button 
          className="mt-2 px-4 py-2 bg-red-100 hover:bg-red-200 rounded-md"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Label htmlFor="timeRange">Période</Label>
          <Select value={timeRange} onValueChange={onTimeRangeChange}>
            <SelectTrigger id="timeRange" className="w-40">
              <SelectValue placeholder="Période" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7 derniers jours">7 derniers jours</SelectItem>
              <SelectItem value="30 derniers jours">30 derniers jours</SelectItem>
              <SelectItem value="90 derniers jours">90 derniers jours</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-sm font-medium text-gray-500">Total des ventes</div>
            <div className="text-2xl font-bold mt-2">{format(data.totalSales)}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="text-sm font-medium text-gray-500">Meilleur magasin</div>
            <div className="text-xs text-gray-400">{data.topStoreName}</div>
            <div className="text-2xl font-bold mt-1">{format(data.topStoreSales)}</div>
            <div className={`text-sm mt-1 ${trendColor(data.topStoreTrend)}`}>
              {data.topStoreTrend.toFixed(1)}%
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="text-sm font-medium text-gray-500">Produit vedette</div>
            <div className="text-xs text-gray-400">{data.topProductName}</div>
            <div className="text-2xl font-bold mt-1">{format(data.topProductSales)}</div>
            <div className={`text-sm mt-1 ${trendColor(data.topProductTrend)}`}>
              {data.topProductTrend.toFixed(1)}%
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="text-sm font-medium text-gray-500">Performance des magasins</div>
            <div className="text-2xl font-bold mt-2">{data.storesPerformance.toFixed(1)}%</div>
            <div className={`text-sm mt-1 ${trendColor(data.storesPerformanceTrend)}`}>
              {data.storesPerformanceTrend.toFixed(1)}%
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TotalSales;